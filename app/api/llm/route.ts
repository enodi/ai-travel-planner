import { DataSource } from "typeorm";
import { NextResponse } from "next/server";
import { SqlDatabase } from "langchain/sql_db";
import { QuerySqlTool } from "langchain/tools/sql";
import { PromptTemplate } from "@langchain/core/prompts";
import { createSqlQueryChain } from "langchain/chains/sql_db";
import { StringOutputParser } from "@langchain/core/output_parsers";
import {
  RunnablePassthrough,
  RunnableSequence,
} from "@langchain/core/runnables";

import { llm } from "@/src/lib/open-ai";

const DB_TYPE = "postgres"
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const prompt = searchParams.get("prompt")

  const datasource = new DataSource({
    type: DB_TYPE,
    host: process.env.NEXT_APP_DB_HOST,
    database: process.env.NEXT_APP_DB,
    username: process.env.NEXT_APP_DB_USERNAME,
    port: Number(process.env.NEXT_APP_DB_PORT),
    password: process.env.NEXT_APP_DB_PASSWORD
  });

  const db = await SqlDatabase.fromDataSourceParams({
    appDataSource: datasource,
  });

  const executeQuery = new QuerySqlTool(db);
  const writeQuery = await createSqlQueryChain({
    llm,
    db,
    dialect: "postgres",
  });

  const answerPrompt =
    PromptTemplate.fromTemplate(`Given the following user question, corresponding SQL query, and SQL result, answer the user question by creating a 1-3 day itinerary. Provide a brief description of the location for each day, along with the available events. Ensure all properties/attributes are in snake_case and all data is stored in itinerary array.
  Question: {question}
  SQL Query: {query}
  SQL Result: {result}
  Answer in JSON format: itineraries = [
    {{
      "day": "1",
      "description": "<description provided by the LLM>",
      "events": "gotten from answer"
    }}
  ]`);
  const answerChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());

  const chain = RunnableSequence.from([
    RunnablePassthrough.assign({ query: writeQuery }).assign({
      result: (i: { query: string }) => executeQuery.invoke(i.query),
    }),
    answerChain,
  ]);

  const response = await chain.invoke({ question: prompt });
  const parsedResponse = JSON.parse(response)

  return NextResponse.json({ success: true, data: parsedResponse }, { status: 200 });
}
