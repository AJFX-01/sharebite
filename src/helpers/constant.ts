export const API_ENDPOINTS = {
  auth: {
    login: 'login/',
    signup: 'register/',
    editprofile: 'edituser/',
    resetpassword: 'resetpassword/',
  },
  donation: {
    donations: 'donations/',
    getDonationDetails: 'donations/<int:donation_id>/',
    uploadProofs: 'donations/<int:donation_id>/proof/',
    reserve: 'donations/<int:donation_id>/reserve/',
    cancelDonation: 'donations/<int:donation_id>/cancel/',
    receipts: 'receipts/',
  },
  droffsites: {
    getAllSites: 'dropoff-sites/',
    addSite: 'addsite/',
  },
};
