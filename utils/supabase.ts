import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://qqjdnvpfusuvdjwfkijh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxamRudnBmdXN1dmRqd2ZraWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3MDQyMjQsImV4cCI6MjAyODI4MDIyNH0.xIaty3OXkYe3sW_8BowpYrG3kncJjnVMudf9JWJ8vRM';

export const supabase = createClient(supabaseUrl, supabaseKey);
        