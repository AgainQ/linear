import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTeams } from '@/features/teams/hooks';

import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import { Box, Grid2x2 } from 'lucide-react';
import styles from './Teams.module.css';

import type { TeamRow } from '@/types/types';

export default function Teams() {
  const { teams, isPending, error } = useTeams();

  if (isPending) return <Spinner />;
  if (error) return <ErrorMessage />;
  // if teams.length ==== 0 ...

  return (
    <div>
      {teams.map(team => (
        <Team team={team} key={team.identifier} />
      ))}
    </div>
  );
}

type TeamProps = {
  team: TeamRow;
};

function Team({ team }: TeamProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(open => !open);

  const { name, identifier } = team;

  return (
    <div>
      <p onClick={toggleOpen} className={styles.teamName}>
        <span>{name}</span>
      </p>
      {isOpen && (
        <ul className={styles.navLinksList}>
          <li>
            <NavLink to='team/W/issues/all' className={styles.navLink}>
              <Grid2x2 />
              Issues
            </NavLink>
          </li>
          <li>
            <NavLink to='team/W/projects/all' className={styles.navLink}>
              <Box /> Projects
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}
