import { useQuery } from '@tanstack/react-query';
import DonationApiRequest from 'api/donation';
import { createContext, useContext, useState } from 'react';

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

  const { data, isLoading, error } = useQuery({
    queryKey: ['donations', statusFilter],
    queryFn: () => DonationApiRequest.getAllDonations(statusFilter),
  });

  const donations = data?.donations || [];

  return (
    <DonationContext.Provider
      value={{
        donations,
        isLoading,
        error,
        statusFilter,
        setStatusFilter,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
};
