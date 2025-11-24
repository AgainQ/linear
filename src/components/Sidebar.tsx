import styles from './Sidebar.module.css';
import Team from './Team';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>
        <p>Your teams</p>
        <Team name='cat' />
      </div>
    </div>
  );
}
