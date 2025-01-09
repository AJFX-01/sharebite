import { axiosInstance } from "./config"

class AuthenticationApi {
  static loginUser = async (credential: LoginFormData) => {
    try {
      const response = await axiosInstance.post()
    } catch {

    }
  }

  static registerUser = async (credential: SignupFormData) => {

  }
}