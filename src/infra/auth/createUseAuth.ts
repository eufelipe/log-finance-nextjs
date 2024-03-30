import { OAuthUser, UseAuthReturn } from "@/domain/models";
import { signIn, signOut, useSession } from "next-auth/react";

export const createUseAuth = () => (): UseAuthReturn => {
  const { data: sessionData, status } = useSession();

  const userData = sessionData?.user;

  const isAuthenticated = status === "authenticated" && !!userData?.email;

  const user: OAuthUser | undefined =
    isAuthenticated && !!userData && !!userData.email
      ? {
          email: userData.email,
          name: userData?.name ?? "guest",
          image: userData?.image ?? undefined,
        }
      : undefined;

  return {
    session: {
      isAuthenticated,
      user,
    },
    signIn,
    signOut,
  };
};
