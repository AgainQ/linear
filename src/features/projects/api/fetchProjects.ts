import supabase from '@/lib/supabase';

// by team id ?

export async function fetchProjectsByTeamId(teamId: number) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('teamId', teamId);

  if (error) {
    throw error;
  }

  return data;
}
