
 export type State = {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    isLoading: boolean;
    error: string;
    setField: (field: string, value: string) => void;
    registerUser: () => Promise<void>;
  };