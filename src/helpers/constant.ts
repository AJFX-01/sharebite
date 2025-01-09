export const API_ENDPOINTS = {
  auth: {
    login: 'login/',
    signup: 'register/',
  },
  donation: {
    donations: 'donations/',
    getDonationDetails: 'donations/<int:pk>/',
    uploadProofs: 'donations/<int:donation_id>/proof/',
  },
  droffsites: {
    getAllSites: 'dropoff-sites/',
    addSite: 'addsite/',
  },
};
