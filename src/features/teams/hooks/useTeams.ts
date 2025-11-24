import { useQuery } from '@tanstack/react-query';
import { fetchTeams } from '../api';

export function useTeams() {
  const { data, isPending, error } = useQuery({
    queryKey: ['teams'],
    queryFn: fetchTeams,
  });

  return { teams: data ?? [], isPending, error };
}
