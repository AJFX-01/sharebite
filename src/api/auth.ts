import { API_ENDPOINTS } from 'helpers/constant';
import { axiosInstance } from './config';

class AuthenticationApi {
  static loginUser = async (credentials: LoginFormData) => {
    try {
      const response = await axiosInstance.post(
        `/${API_ENDPOINTS.auth.login}`,
        credentials,
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.error);
      } else {
          throw new Error('an error while proceessing your request');
      }
    }
  };

  static registerUser = async (credential: SignupFormData) => {};
}
