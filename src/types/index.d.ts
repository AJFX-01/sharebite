declare global {
  interface LoginFormData {
    username: string;
    password: string;
  }

  interface SignupFormData {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmpassword: string;
  }
}

export {};
