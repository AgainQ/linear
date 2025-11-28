import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTeams } from '@/features/teams/hooks';

import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import { ArrowBigRight, Box, Layers2, SquareChartGantt, SquareUser } from 'lucide-react';
import clsx from 'clsx';
import styles from './Teams.module.css';

import type { TeamRow } from '@/types/types';

export default function Teams() {
  const { teams, isPending, error } = useTeams();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(open => !open);

  if (isPending) return <Spinner />;
  if (error) return <ErrorMessage />;
  // if teams.length ==== 0 ...

  return (
    <div>
      <p className={styles.text} onClick={toggleOpen}>
        <span>Your teams</span>
        <ArrowBigRight className={clsx(styles.arrowIcon, isOpen && styles.open)} />
      </p>
      {isOpen && (
        <div>
          {teams.map(team => (
            <Team team={team} key={team.identifier} />
          ))}
        </div>
      )}
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
        <SquareUser className={styles.teamIcon} strokeWidth={2} /> <span>{name}</span>
      </p>
      {isOpen && (
        <ul className={styles.navLinksList}>
          <li>
            <NavLink to='team/W/issues/all' className={styles.navLink}>
              <SquareChartGantt />
              Issues
            </NavLink>
          </li>
          <li>
            <NavLink to='team/W/projects/all' className={styles.navLink}>
              <Box /> Projects
            </NavLink>
          </li>
          <li>
            {/* tbd */}
            <NavLink to='team/W/issues/all/' className={styles.navLink}>
              <Layers2 /> Views
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}
