import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export function createClient() {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase URL or Key");
  }
  return createBrowserClient(supabaseUrl, supabaseKey);
}

export default createClient;
