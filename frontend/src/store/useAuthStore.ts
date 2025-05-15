import { create } from "zustand";

interface AuthState {
  loading: boolean;
  isAdmin: boolean;
  isAuthentication: boolean;
  setLoading: (value: boolean) => void;
  setIsAdmin: (value: boolean) => void;
  setIsAuthentication: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  loading: true,
  isAdmin: false,
  isAuthentication: false,
  setLoading: (value: boolean) => set({ loading: value }),
  setIsAdmin: (value: boolean) => set({ isAdmin: value }),
  setIsAuthentication: (value: boolean) => set({ isAuthentication: value }),
}));