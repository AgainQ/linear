import supabase from '@/lib/supabase';

// by team id ?

export async function fetchProjectsByTeamIdentifier(teamIdentifier: string) {
  const { data: team, error: teamError } = await supabase
    .from('teams')
    .select('id')
    .eq('identifier', teamIdentifier)
    .single();

  if (teamError) {
    console.log(teamError);
    throw teamError;
  }

  const { data, error } = await supabase.from('projects').select('*').eq('id', team.id);

  if (error) {
    console.log(error);
    throw error;
  }

  return data;
}
