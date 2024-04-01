import NextAuth from "next-auth";

import { nextAuthAdapter } from "@/app/adapters";

import { authenticationUseCaseFactory } from "@/app/factories";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    signIn: nextAuthAdapter({
      authenticationUseCase: authenticationUseCaseFactory,
    }).signIn,
  },
});

export { handler as GET, handler as POST };
