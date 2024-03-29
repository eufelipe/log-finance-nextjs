import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    async session({ session, token, user }) {
      console.log("session", session, token, user);

      return session;
    },

    async jwt({ token, account, profile }) {
      console.log("jwt", token, account, profile);

      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },

    async redirect({ url, baseUrl }) {
      console.log("url", url, baseUrl);

      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;

      return baseUrl;
    },
  },
});

export { handler as GET, handler as POST };
