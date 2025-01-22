import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from 'context/userContext';

const App = () => {
  return (
    <>
      <Toaster />
      <Outlet />
    </>
  );
};

export default App;
