import { MergeDeep } from "type-fest"
import { Database as DatabaseGenerated } from "@/types.gen"

export type Database = MergeDeep<
  DatabaseGenerated,
  {
    public: {
      Tables: {
      }
    }
  }
>