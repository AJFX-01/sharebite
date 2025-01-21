import { createContext, useContext, useState } from 'react';

const UserContext = createContext<UserContext | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

export const UserProvider = ({ children }: ContextProps) => {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = Boolean(user);
  const login = (user: User) => setUser(user);
  const logout = () => setUser(null);
  const isDonor = () => user?.is_donor === true;
  const isReceiver = () => user?.is_reciever === false;

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
