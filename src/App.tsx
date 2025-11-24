import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import Issues from './pages/Issues';
import Projects from './pages/Projects';
import Issue from './pages/Issue';
import Project from './pages/Project';
import AppLayout from './layouts/AppLayout';
// Pages

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <Toaster visibleToasts={5} position='top-center' richColors expand />
    </QueryClientProvider>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* should be hidden behind protected route actually */}
        <Route index element={<Navigate to='team' replace />} />

        <Route element={<AppLayout />}>
          <Route path='my-issues'>
            <Route index element={<Navigate to='assigned' />} />
            <Route path='assigned' />
            <Route path='created' />
            <Route path='subscribed' />
            <Route path='activity' />
          </Route>

          <Route path='team'>
            <Route index element={<Navigate to='W/issues/all' replace />} />
            <Route path='W/issues/all' element={<Issues />} />
            <Route path='W/projects/all' element={<Projects />} />
          </Route>

          <Route path='issue/:issueId' element={<Issue />} />
          <Route path='project/:projectId' element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
