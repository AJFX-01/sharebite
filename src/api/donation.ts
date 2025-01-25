import { API_ENDPOINTS } from 'helpers/constant';
import { axiosInstance, handleAxiosError } from './config';

class DonationApiRequest {
  static getAllDonations = async (status: string) => {
    try {
      const response = await axiosInstance.get(
        `/${API_ENDPOINTS.donation.donations()}`,
      );
      const donations: Donation[] = response.data;

      const filteredDonations = donations.filter((donation) => {
        const matchDonations =
          status === 'all' ||
          donation.status.toUpperCase() === status.toUpperCase();
        return matchDonations;
      });

      return { donations: filteredDonations };
    } catch (error) {
      handleAxiosError(error);
    }
  };

  static getUserDonations = async () => {
    try {
      const response = await axiosInstance.get(
        `/${API_ENDPOINTS.donation.userdonations()}`,
      );

      return response.data;
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

  static updateDonationStatus = async (donation_id: number) => {
    try {
      const response = await axiosInstance.patch(
        `/${API_ENDPOINTS.donation.updatestatus(donation_id)}`,
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  };
}

export default DonationApiRequest;
