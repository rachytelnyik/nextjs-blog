import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "process";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "login",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (
          credentials?.username === process.env.ADMIN_USERNAME &&
          credentials?.password === process.env.ADMIN_PASSWORD
        ) {
          const user: User = { id: "1", username: "", password: "", email: "" };
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
