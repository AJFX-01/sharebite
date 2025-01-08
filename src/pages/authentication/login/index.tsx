import LoginForm from "../../../components/common/Login";

const LoginPage = () => {


  return (
    <div className="flex min-h-screen">

      <div className="hidden lg:flex items-center justify-center flex-1 bg-gray-100">
        <svg
          className="w-2/3 h-2/3 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="flex items-center justify-center flex-1 px-4 sm:px-6 lg:px-8">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage;