import { AxiosInstance } from 'axios';
import { create } from 'zustand';
import { createApiClient } from '../services/ApiClientProvider';
import useLocalStorage from '../utils/useLocalStorage';

interface AuthStore {
  apiClient: AxiosInstance | null;
  token: string | null;
  setToken: (token: string | null) => void;
  initializeSession: (token: string, user: any) => void;
  user: any | null;
  setUser: (user: any | null) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  apiClient: null,
  token: null,
  setToken: (token: string | null) => set({ token }),

  initializeSession: (token: string, user: any) => {
    const { setLocalStorageSecure } = useLocalStorage();
    setLocalStorageSecure('token', token);
    const newApiClient = createApiClient(token);
    set({ apiClient: newApiClient });
    set({ token: token });
    set({ user: user });
  },
  user: null,
  setUser: (user: string) => set({ user }),
}));

export default useAuthStore;
