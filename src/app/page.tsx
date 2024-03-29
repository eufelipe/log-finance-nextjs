"use client";

import { useAuth } from "@/app/contexts/AuthProvider";
import { HomeScreen, LoginScreen } from "@/presentation";

export default function Root() {
  const {
    session: { isAuthenticated, user },
  } = useAuth();

  console.log("user", user);

  if (isAuthenticated && !!user) {
    return <HomeScreen user={user} />;
  }

  return <LoginScreen />;
}
