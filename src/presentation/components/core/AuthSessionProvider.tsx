"use client";
import { SessionProvider } from "next-auth/react";

import { FC, ReactNode } from "react";

/**
 * SessionWrapper is a higher-order component that provides a session context
 * to its child components using NextAuth's `SessionProvider`.
 */

interface AuthSessionProviderProps {
  children: ReactNode;
}

const AuthSessionProvider: FC<AuthSessionProviderProps> = ({
  children,
  ...restProps
}) => {
  return <SessionProvider {...restProps}>{children}</SessionProvider>;
};

export default AuthSessionProvider;
