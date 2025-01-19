declare global {
  interface LoginFormData {
    username: string;
    password: string;
  }

  interface SignupFormData {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirmpassword: string;
  }

  interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_donor: boolean;
    is_reciever: boolean;
  }

  interface Donation {
    id: number;
    donor: User;
    title: string;
    description: string;
    location: string;
    is_reserved: boolean;
    is_deleivered: boolean;
    created_at: string | Date;
    reserved_by: User;
    proof?: Proof;
  }

  interface Proof {
    id: number;
    donation: Donation;
    proof_image: string;
    uploaded_by: User;
  }

  interface DroffSite {
    id: string;
    location: string;
    added_by: User;
    created_at: string;
  }

  interface Reciept {
    id: string;
    user: User;
    donation: Donation;
    pickup_date: string;
    created_at: string;
  }

  // Props
  interface NoDataProps {
    title: string;
    description: string;
  }

  interface MemeberDesProps {
    iconName?: string;
    iconTitle: string;
    IconNumber: number;
    iconColor: string;
    iconBgColor: string;
  }

  interface FilterDataType {
    id: number;
    title: string;
  }

  interface MakeDonationProps {
    onClose: () => void;
  }

  interface ImageUploadProps {
    onImageUpload?: (logoUrl: string) => void;
  }

  interface DonationProofUploadProps {
    onClose: () => void;
    donation: Donation;
  }

  interface DonationViewProps {
    onClose: () => void;
    donation: Donation;
    mode: string;
  }
  
  interface DetailsProps {
    titleRight: string;
    titleLeft: string;
    labelRight: string;
    labelLeft: string;
  }
}

export {};
