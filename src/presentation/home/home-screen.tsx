"use client";

import { Header } from "@/app/components";
import { Session } from "next-auth";
import Image from "next/image";

type HomeScreenProps = {
  session: Session;
};

export default function HomeScreen({ session }: HomeScreenProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-44 h-44 relative mb-4">
          <Image
            src={session.user?.image as string}
            fill
            alt=""
            className="object-cover rounded-full"
          />
        </div>
        <p className="text-2xl mb-2">
          <span className="font-bold">{session.user?.name}</span>
        </p>
        <p className="font-bold mb-4">{session.user?.email}</p>
      </div>
    </div>
  );
}
