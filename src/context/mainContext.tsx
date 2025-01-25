import { DonationProvider } from './donationContext';
import { UserProvider } from './userContext';

const Providers = ({ children }: ContextProps) => {
  return (
    <UserProvider>
      <DonationProvider>{children}</DonationProvider>
    </UserProvider>
  );
};

export default Providers;
