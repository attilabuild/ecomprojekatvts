import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hpokkjikgnchpbdrevjc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhwb2tramlrZ25jaHBiZHJldmpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTg2OTIsImV4cCI6MjA4MjU3NDY5Mn0.XOFzbeTMXQznITyJdO1eI3LNxSR9j4VlYOxEQceAOMY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

