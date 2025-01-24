export const API_ENDPOINTS = {
  auth: {
    login: () : string => 'login/',
    signup: () => 'register/',
    editprofile: () => 'edituser/',
    resetpassword: () => 'resetpassword/',
  },
  donation: {
    donations: () => 'donations/',
    updatestatus: (pk: number) => `donations/${pk}/status/`,
    userdonations: () => 'donations/mine/',
    getDonationDetails: (donation_id: number) => `donations/${donation_id}/`,
    uploadProofs: (donation_id: number) => `donations/${donation_id}/proof/`,
    reserve: (donation_id: number) => `donations/${donation_id}/reserve/`,
    cancelDonation: (donation_id: number) => `donations/${donation_id}/cancel/`,
    receipts: () => 'receipts/',
  },
  droffsites: {
    getAllSites: () => 'dropoff-sites/',
    addSite: () => 'addsite/',
  },
  users: {
    donors: () => 'donors/',
    receiver: () => 'receivers/',
  },
};
