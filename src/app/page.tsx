"use client";

import { HomeScreen, LoginScreen } from "@/presentation";
import { useSession } from "next-auth/react";

export default function Root() {
  const { data: session } = useSession();

  if (session) {
    return <HomeScreen session={session} />;
  }

  return <LoginScreen />;
}
