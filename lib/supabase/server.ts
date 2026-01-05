import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hpokkjikgnchpbdrevjc.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhwb2tramlrZ25jaHBiZHJldmpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Njk5ODY5MiwiZXhwIjoyMDgyNTc0NjkyfQ.TNlN8eoN98NdCajGtJw0yoJ0OlMMdbWnVrwRuNPlgQ4';

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

