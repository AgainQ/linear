import styles from './Sidebar.module.css';
import Teams from './Teams';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>
        <p>Your teams</p>
        <Teams />
      </div>
    </div>
  );
}
