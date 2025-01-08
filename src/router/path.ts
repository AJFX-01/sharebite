export const rootPaths = {
  root: '/',
  pageRoots: '/',
  authRoot: '/',
  errorRoot: '/error'
};


const paths = {
  default: `${rootPaths.root}`,
  login: `${rootPaths.authRoot}login`,
  signup: `${rootPaths.authRoot}sign-up`
};

export default paths;