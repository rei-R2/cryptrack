import { userLogin } from "@/utils/users";
import { Account, User, Session } from "next-auth";
import NextAuth from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

interface UserLogin {
  id: string;
  username: string;
  email: string;
  password: string;
  img: string | null;
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string | unknown;
      email: string | null | undefined;
      username: string | unknown;
      img: string | unknown;
    };
  }
}

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const login = await userLogin(email, password);
        if (login.status === 200) {
          return login.data;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({
      account,
      token,
      user,
    }: {
      account: Account | null;
      token: JWT;
      user: User | AdapterUser;
    }) {
      const dataUser = user as UserLogin;
      if (account?.provider === "credentials") {
        token.id = user.id;
        token.email = user.email;
        token.username = dataUser.username;
        token.img = dataUser.img;
      }
      return token;
    },
    async session({ token, session }: { token: JWT; session: Session }) {
      if ("id" in token) {
        session.user.id = token.id;
      }
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("username" in token) {
        session.user.username = token.username;
      }
      if ("img" in token) {
        session.user.img = token.img;
      }

      return session;
    },
  },
});

export { handler as GET, handler as POST };
