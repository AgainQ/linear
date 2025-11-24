import { useParams } from 'react-router-dom';

export default function Issue() {
  const { issueId } = useParams();
  return <div>Issue {issueId}</div>;
}
