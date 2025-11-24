import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchProjectsByTeamIdentifier } from '../api';

export function useProjects() {
  const { teamIdentifier } = useParams();

  const { data, isPending, error } = useQuery({
    queryKey: ['projects', `team-${teamIdentifier}`],
    queryFn: () => fetchProjectsByTeamIdentifier(teamIdentifier as string),
    enabled: Boolean(teamIdentifier),
  });

  return { projects: data, isPending, error };
}
