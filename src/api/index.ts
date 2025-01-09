import { API_ENDPOINTS } from 'helpers/constant';
import { axiosInstance, handleAxiosError } from './config';

class ApiRequests {
  static loginUser = async (credentials: LoginFormData) => {
    try {
      const response = await axiosInstance.post(
        `/${API_ENDPOINTS.auth.login}`,
        credentials,
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  };

  static registerUser = async (credentials: SignupFormData) => {
    try {
      const response = await axiosInstance.post(
        `/${API_ENDPOINTS.auth.signup}`,
        credentials,
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  };
}

export default ApiRequests;
