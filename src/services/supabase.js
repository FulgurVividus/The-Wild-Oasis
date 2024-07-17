import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cpbkfsuxkwclxynwyhmr.supabase.co";

const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwYmtmc3V4a3djbHh5bnd5aG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwNDA1ODQsImV4cCI6MjAzNjYxNjU4NH0.AbKZiUbwiCpezttY1fB8FKbbm9TsPb4LJQzToBybcT4`;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
