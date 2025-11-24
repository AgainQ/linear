import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database.types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_PUBLIC_KEY = import.meta.env.VITE_SUPABASE_PUBLIC_KEY || '';
const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLIC_KEY);

export default supabase;
