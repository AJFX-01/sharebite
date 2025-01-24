import { API_ENDPOINTS } from 'helpers/constant';
import { axiosInstance, handleAxiosError } from './config';

class DonationApiRequest {
  static getAllDonations = async () => {
    try {
      const response = await axiosInstance.get(
        `/${API_ENDPOINTS.donation.donations}`,
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  };

  static getUserDonations = async () => {
    try {
      const response = await axiosInstance.get(
        `/${API_ENDPOINTS.donation.userdonations}`,
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  };

  static makeDonation = async () => {
    try {
      const response = await axiosInstance.post(
        `/${API_ENDPOINTS.donation.donations}`,
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  };

  static updateDonationStatus = async (donation_id: string) => {
    try {
      const response = await axiosInstance.patch(
        `/${API_ENDPOINTS.donation.updatestatus}`,
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  };
}

export default DonationApiRequest;
