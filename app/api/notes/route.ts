import { NextResponse } from "next/server";

import { createSupabaseClient } from "@/src/lib/supabase/createSupabaseClient"

export async function GET(request: Request) {
  const supabaseAdmin = createSupabaseClient()

  return NextResponse.json({ success: true }, { status: 200 })
}
