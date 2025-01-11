export const rootPaths = {
  root: '/',
  pageRoots: '/',
  authRoot: '/',
  errorRoot: '/error',
};

const paths = {
  default: `${rootPaths.root}`,
  login: `${rootPaths.authRoot}login`,
  signup: `${rootPaths.authRoot}sign-up`,
  notfound: `${rootPaths.errorRoot}/404`,

  dashboard: `${rootPaths.pageRoots}dashboard`,
  donations: `${rootPaths.pageRoots}donations`,
  donors: `${rootPaths.pageRoots}donors`,
  receivers: `${rootPaths.pageRoots}receivers`,
};

export default paths;
