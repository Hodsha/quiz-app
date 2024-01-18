import { createClient } from "@supabase/supabase-js";

const supabaseUrl: any = process.env.NEXT_PUBLIC_SUPABASE_URL
const supbaseKey: any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supbaseKey);

