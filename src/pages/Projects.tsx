import { useProjects } from '@/features/projects/hooks';
import ErrorMessage from '@/components/ErrorMessage';
import Spinner from '@/components/Spinner';

// later split in into multiple components
// page itself doesn't have to contain it all
export default function Projects() {
  const { projects, isPending, error } = useProjects();

  console.log(projects);

  if (isPending) return <Spinner />;
  if (error) return <ErrorMessage />;

  return (
    <div>
      <div>Project name | All Projects | Other views - add Project</div>
      <div>filter - display settings</div>
      <div>table header</div>
      <div>name, priority, status, lead, members, etc</div>
    </div>
  );
}

function TableHeader() {}

function TableBody() {}

function TableRow() {}
