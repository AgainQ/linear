import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
// Pages
import Issues from './pages/Issues';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';

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
        <Route index element={<Navigate to='/issues' replace />} />
        <Route path='issues' element={<Issues />} />
        <Route path='profile' element={<Profile />} />

        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
