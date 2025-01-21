import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from 'context/userContext';

const App = () => {
  return (
    <>
      <UserProvider>
        <Toaster />
        <Outlet />
      </UserProvider>
    </>
  );
};

export default App;
