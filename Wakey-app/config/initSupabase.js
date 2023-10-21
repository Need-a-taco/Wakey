// supabaseClient.js
import { createClient } from "@supabase/supabase-js";
import { REACT_NATIVE_SUPABASE_URL, SUPABASE_KEY } from "@env";

const supabaseUrl = REACT_NATIVE_SUPABASE_URL;
const supabaseKey = SUPABASE_KEY;
console.log("supabase connected");

export const supabase = createClient(supabaseUrl, supabaseKey);