import { useProjects } from '@/features/projects/hooks';
import { useLocation } from 'react-router-dom';

import ErrorMessage from '@/components/ErrorMessage';
import Spinner from '@/components/Spinner';
import { Link, ListFilter, Plus, SlidersHorizontal, SquareUser } from 'lucide-react';
import styles from './Projects.module.css';
import clsx from 'clsx';

// later split in into multiple components
// page itself doesn't have to contain it all
export default function Projects() {
  const { projects, isPending, error } = useProjects();

  console.log(projects);

  if (isPending) return <Spinner />;
  if (error) return <ErrorMessage />;

  return (
    <>
      <Header />
    </>
  );
}

function Header() {
  const location = useLocation();

  function copyUrl() {
    const fullUrl = window.location.origin + location.pathname + location.search;
    console.log(fullUrl);
  }

  function addProject() {
    console.log('add');
  }

  return (
    <header className={styles.pageHeader}>
      <div className={styles.viewsBar}>
        <p className={styles.projectName}>
          <SquareUser /> Work
        </p>

        <div className={styles.rightBtnGroup}>
          <button onClick={copyUrl} className={clsx(styles.btn, styles.copyUrlBtn)}>
            <Link />
          </button>
          <button onClick={addProject} className={clsx(styles.btn, styles.addProjectBtn)}>
            <Plus /> Add project
          </button>
        </div>
      </div>

      <div className={styles.tableOperations}>
        <button className={clsx(styles.btn, styles.filterBtn)}>
          <ListFilter /> Filter
        </button>
        <button className={clsx(styles.btn, styles.displayBtn)}>
          <SlidersHorizontal /> Display
        </button>
      </div>
    </header>
  );
}

// 1 Header ?

// 2 Table with projects

function ProjectsTable() {
  return (
    <div>
      <div>table header</div>
      <div>name, priority, status, lead, members, etc</div>
    </div>
  );
}

function TableHeader() {}

function TableBody() {}

function TableRow() {}
