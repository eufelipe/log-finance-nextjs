"use client";

import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

import { User } from "@/domain/models";
import { Header } from "@/presentation/components";

type HomeScreenProps = {
  user: User;
};

export default function HomeScreen({ user }: HomeScreenProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header isAuthenticated handleSignIn={signIn} handleSignOut={signOut} />

      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-44 h-44 relative mb-4">
          {!!user?.image && (
            <Image
              src={user?.image as string}
              fill
              alt=""
              className="object-cover rounded-full"
            />
          )}
        </div>
        <p className="text-2xl mb-2">
          <span className="font-bold">{user?.name}</span>
        </p>
        <p className="font-bold mb-4">{user.email}</p>
      </div>
    </div>
  );
}
