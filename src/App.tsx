import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <Toaster />
      <Outlet />
    </>
  );
};

export default App;
