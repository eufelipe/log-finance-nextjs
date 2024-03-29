"use client";

import { UseAuthReturn } from "@/domain/models";
import AuthSessionProvider from "@/infra/auth/AuthSessionProvider";
import { useNextAuth } from "@/infra/auth/useNextAuth";

import { createContext, useContext } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<UseAuthReturn>({} as UseAuthReturn);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useNextAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export const RootAuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <AuthSessionProvider>
      <AuthProvider>{children}</AuthProvider>
    </AuthSessionProvider>
  );
};

export default AuthProvider;
