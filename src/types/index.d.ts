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
    reserved_by: User | null;
    proof?: Proof;
  }

  interface ReDonation {
    id: number;
    donor: User;
    title: string;
    description: string;
    location: string;
    is_reserved: boolean;
    is_deleivered: boolean;
    created_at: string | Date;
    reserved_by: User | null;
    proof?: Proof;
    receipt?: Reciept;
  }

  interface Proof {
    id: number;
    donation: Donation;
    proof_image: string;
    uploaded_by: User;
  }

  interface Reciept {
    id: number;
    donation: Donation;
    proof_image: string;
    uploaded_by: User;
    pickup_date: string;
    created_at: string;
  }

  interface DroffSite {
    id: string;
    location: string;
    added_by: User;
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
    mode: string;
  }

  interface ReceiptProps {
    onClose: () => void;
    donation: ReDonation;
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

  // context
  interface UserContext {
    user: User | null;
    isAuthenticated: boolean;
    login: (user: User) => void;
    logout: () => void;
    setUser: (user: User | null) => void;
    isDonor: () => boolean;
    isReceiver: () => boolean;
  }

  type ContextProps = {
    children: React.ReactNode;
  };
}

export {};
