import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qlnuqauckpitlbqwppit.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsbnVxYXVja3BpdGxicXdwcGl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3Mjg5ODEsImV4cCI6MjA1MDMwNDk4MX0.HlPDDjakj12FsTLok8ZHcTUd10bq5sB7kfPK_uFCzDA";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
