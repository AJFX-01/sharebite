import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Toaster />
      <Outlet />
    </>
  );
};

export default App;
