"use client";

import { UseAuthReturn, User } from "@/domain/models";
import { Session } from "next-auth";
import {
  signIn as nextSignIn,
  signOut as nextSignOut,
  useSession,
} from "next-auth/react";

export const createUseAuth = (signInProvider: string) => (): UseAuthReturn => {
  if (!signInProvider) throw new Error("No provider was provided");

  const { data: sessionData, status } = useSession();

  const isAuthenticated =
    status === "authenticated" && !!sessionData?.user?.email;

  const createUserFromSession = (sessionData: Session): User | undefined => {
    const email = sessionData.user?.email ?? "";
    if (!email) return undefined;

    return {
      name: sessionData.user?.name ?? "guest",
      email,
      image: sessionData.user?.image || undefined,
    };
  };

  const user: User | undefined =
    isAuthenticated && sessionData?.user
      ? createUserFromSession(sessionData)
      : undefined;

  return {
    session: {
      isAuthenticated,
      user,
    },
    signIn: () => nextSignIn(signInProvider),
    signOut: nextSignOut,
  };
};
