import {create} from 'zustand';
import {persist} from 'zustand/middleware'

export const useAuthStore = create(
  persist((set) => ({
    token: null,
    user: null,
    refreshToken: null,
    setAuth: (token, user, refreshToken) => set({token, user, refreshToken}),
    clearAuth: () => set({token: null, user: null, refreshToken: null}),
    isAuthenticated: () => !!get().token,
  })), {
    name: 'auth-store',
  })
;
