"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { FC, ReactNode } from "react";

/**
 * AuthSessionProvider is a higher-order component that provides a session context
 * to its child components using NextAuth's `SessionProvider`.
 */

interface AuthSessionProviderProps extends SessionProviderProps {
  children: ReactNode;
}

const AuthSessionProvider: FC<AuthSessionProviderProps> = ({
  children,
  ...sessionProviderProps
}) => {
  return (
    <SessionProvider {...sessionProviderProps}>{children}</SessionProvider>
  );
};

export default AuthSessionProvider;
