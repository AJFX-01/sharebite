import { useQuery } from '@tanstack/react-query';
import DonationApiRequest from 'api/donation';
import { createContext, useContext, useState } from 'react';
import { useUser } from './userContext';
import DroffSiteApiRequest from 'api/droffoff';

const DonationContext = createContext<DonationContextType | undefined>(
  undefined,
);

export const useDonation = () => {
  const context = useContext(DonationContext);

  if (context === undefined) {
    throw new Error('useDonation must be with a provider');
  }

  return context;
};

export const DonationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [statusFilter, setStatusFilter] = useState('all');
  const { user, isDonor, isReceiver } = useUser();

  const {
    data: donationData,
    isLoading: donationLoading,
    error: donationError,
  } = useQuery({
    queryKey: ['donations', statusFilter],
    queryFn: () => DonationApiRequest.getAllDonations(statusFilter),
    enabled: !!user,
  });

  const donations = donationData?.donations || [];

  const {
    data: locationsData,
    isLoading: locationLoading,
    error: locationError,
  } = useQuery({
    queryKey: ['dropoffsites'],
    queryFn: () => DroffSiteApiRequest.getAllSites(),
    enabled: !!user && !isDonor && !isReceiver,
  });

  const locations = locationsData?.locations || [];

  const {
    data: usersData,
    isLoading: userLoading,
    error: userError
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => (),
    enabled: !!user && !isDonor && !isReceiver,
  });

  const users = usersData.users || []

  return (
    <DonationContext.Provider
      value={{
        donations,
        locations,
        users,
        donationLoading,
        locationLoading,
        userLoading,
        donationError,
        locationError,
        userError,
        statusFilter,
        setStatusFilter,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
};
