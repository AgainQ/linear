import supabase from '@/lib/supabase';

export async function fetchTeams() {
  const { data, error } = await supabase.from('teams').select('*');

  if (error) {
    console.log(error);
    throw error;
  }

  return data;
}
