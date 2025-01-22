import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext<UserContext | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

export const UserProvider = ({ children }: ContextProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const isAuthenticated = Boolean(user);
  const login = (user: User) => setUser(user);
  const logout = () => setUser(null);
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
