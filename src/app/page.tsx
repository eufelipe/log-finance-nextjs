"use client";

import { useAuth } from "@/app/contexts/AuthProvider";
import { HomeScreen, LoginScreen } from "@/presentation";

export default function Root() {
  const {
    session: { isAuthenticated, user },
  } = useAuth();

  if (isAuthenticated) {
    return <HomeScreen isAuthenticated {...user} />;
  }

  return <LoginScreen />;
}
