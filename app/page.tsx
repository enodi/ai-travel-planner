"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@chakra-ui/react";

export default function Page() {
  const { isLoading, data: notes } = useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      const res = await axios.get("/api/notes");
      return res.data.result;
    },
  });

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div>
      {notes.length > 0 &&
        notes.map((note: { id: string; title: string }, index: number) => (
          <h3 key={`${index}-${note.title}`}>{note.title}</h3>
        ))}
      <h1>AI Travel Planner</h1>
      <p>Plan your next trip with AI!</p>
      <Button colorScheme="teal">Click me</Button>
    </div>
  );
}
