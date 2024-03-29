"use client";

import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

import { Header } from "@/presentation/components";

type HomeScreenProps = {
  isAuthenticated: boolean;
  name?: string;
  email: string;
  image?: string;
};

export default function HomeScreen({
  isAuthenticated,
  image,
  email,
  name,
}: HomeScreenProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header
        isAuthenticated={isAuthenticated}
        handleSignIn={signIn}
        handleSignOut={signOut}
      />

      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-44 h-44 relative mb-4">
          {image && (
            <Image
              src={image as string}
              fill
              alt=""
              className="object-cover rounded-full"
            />
          )}
        </div>
        <p className="text-2xl mb-2">
          <span className="font-bold">{name}</span>
        </p>
        <p className="font-bold mb-4">{email}</p>
      </div>
    </div>
  );
}
