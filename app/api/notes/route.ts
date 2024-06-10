import { NextResponse } from "next/server";

import { createSupabaseClient } from "@/src/lib/supabase/createSupabaseClient"

export async function GET(request: Request) {
  const supabaseAdmin = createSupabaseClient()
  const { data: notes, error } = await supabaseAdmin
    .from("notes")
    .select("*")

  if (error) {
    return NextResponse.json(
      { error: "Error occurred while fetching notes" },
      { status: 500 },
    )
  }
  return NextResponse.json({ success: true, result: notes }, { status: 200 })
}
