import { API_ENDPOINTS } from 'helpers/constant';
import { axiosInstance, handleAxiosError } from './config';

class ApiRequests {
  static loginUser = async (credentials: LoginFormData) => {
    try {
      const response = await axiosInstance.post(
        `/${API_ENDPOINTS.auth.login()}`,
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
        `/${API_ENDPOINTS.auth.signup()}`,
        credentials,
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  };

  static editUser = async (credential: EditProfileFormData) => {
    try {
      const response = await axiosInstance.put(
        `/${API_ENDPOINTS.auth.editprofile()}`,
        credential,
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  };

  static resetPassword = async (credential: {
    current_password: string;
    new_password: string;
  }) => {
    try {
      const response = await axiosInstance.put(
        `${API_ENDPOINTS.auth.resetpassword()}`,
        credential,
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  };

  static getMembers = async () => {
    try {
      const response = await axiosInstance.get(
        `/${API_ENDPOINTS.users.members}`,
      );
      return { users: response.data };
    } catch (error) {
      handleAxiosError(error);
    }
  };
}

export default ApiRequests;
