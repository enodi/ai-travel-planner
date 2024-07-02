import { z } from "zod"
import { createClient } from "@supabase/supabase-js"
import { Database } from "@/types.gen"

const env = z
  .object({
    SUPABASE_URL: z.string(),
    SUPABASE_ANON_KEY: z.string(),
  })
  .parse({
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  })

export function createSupabaseClient() {
  return createClient<Database>(
    env.SUPABASE_URL,
    env.SUPABASE_ANON_KEY,
  )
}
