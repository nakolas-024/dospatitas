import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://eslxltguvazwefohhmfo.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzbHhsdGd1dmF6d2Vmb2hobWZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MDA5MTksImV4cCI6MjA3NTQ3NjkxOX0.zsT83t4IbtmmIAIw2y7tL89J43mLDycf-DvOTK6C5Ws";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase as s };
