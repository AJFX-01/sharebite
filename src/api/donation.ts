import { API_ENDPOINTS } from 'helpers/constant';
import { axiosInstance, handleAxiosError } from './config';

class DonationApiRequest {
  static getAllDonations = async (status?: string) => {
    try {
      const response = await axiosInstance.get(
        `/${API_ENDPOINTS.donation.donations()}`,
      );
      const donations: Donation[] = response.data;
      if (status) {
        console.log(status);
        const filteredDonations = donations.filter((donation) => {
          const matchDonations =
            status === 'All' ||
            donation.status.toUpperCase() === status!.toUpperCase();
          return matchDonations;
        });

        return { donations: filteredDonations };
      } else {
        return { donations: donations };
      }
    } catch (error) {
      handleAxiosError(error);
    }
  };

  static getUserDonations = async (status: string) => {
    try {
      const response = await axiosInstance.get(
        `/${API_ENDPOINTS.donation.userdonations()}`,
      );

      const donations: Donation[] = response.data;

      if (status) {
        console.log(status);
        const filteredDonations = donations.filter((donation) => {
          const matchDonations =
            status === 'All' ||
            donation.status.toUpperCase() === status!.toUpperCase();
          return matchDonations;
        });

        return { cdonations: filteredDonations };
      } else {
        return { cdonations: donations };
      }
    } catch (error) {
      handleAxiosError(error);
    }
  };

  static makeDonation = async (credentials: MakeDonation) => {
    try {
      const response = await axiosInstance.post(
        `/${API_ENDPOINTS.donation.donations()}`,
        credentials,
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  };

  static updateDonationStatus = async ({
    status,
    donation_id,
  }: {
    status: string;
    donation_id: number;
  }) => {
    try {
      const response = await axiosInstance.put(
        `/${API_ENDPOINTS.donation.updatestatus(donation_id)}`,
        { status: status },
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  };
}

export default DonationApiRequest;
