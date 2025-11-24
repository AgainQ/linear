import supabase from '@/lib/supabase';

export async function fetchProjectById(id: number) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.log(error);
    throw error;
  }

  return data;
}
