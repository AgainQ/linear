import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Team.module.css';
import { Box, Grid2x2 } from 'lucide-react';

export default function Team({ name }: { name: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(open => !open);
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
