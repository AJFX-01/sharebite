import { createContext, useContext, useEffect, useState } from 'react';
import paths from 'router/path';

const UserContext = createContext<UserContextType | undefined>(undefined);
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }: ContextProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : undefined;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', user.token!);
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  }, [user]);

  const isAuthenticated = Boolean(user);
  const login = (user: User) => {
    console.log('setting');
    setUser(user);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.href = paths.login;
  };
  const isDonor = () => user?.is_donor === true;
  const isReceiver = () => user?.is_receiver === false;

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        login,
        logout,
        isDonor,
        isReceiver,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
