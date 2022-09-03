import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://duxwssaaqncbmnxljeif.supabase.co';
const supabaseAnonToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1eHdzc2FhcW5jYm1ueGxqZWlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4ODAzMjcsImV4cCI6MTk3NzQ1NjMyN30.yjYjpcFe1APExxNn8XsLXOrfDwBrqfq8ULsqUKHgG0g';

export default createClient(supabaseUrl, supabaseAnonToken);
