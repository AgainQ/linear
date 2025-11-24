import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.css';
import Sidebar from '../components/Sidebar';

export default function AppLayout() {
  return (
    <div className={styles.page}>
      <Sidebar />

      <div className={styles.container}>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
