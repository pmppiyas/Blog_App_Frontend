import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

// ✅ Interfaces
interface IUser {
  id: string;
  name: string;
  email: string;
  image?: string;
  role?: string;
}

interface ILoginResponse {
  success: boolean;
  message?: string;
  data: IUser;
}

// ✅ Auth Options
export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<IUser | null> {
        if (!credentials?.email || !credentials.password) {
          console.error("Email or password missing");
          return null;
        }

        try {
          const res = await fetch("http://localhost:5000/api/v1/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const data: ILoginResponse = await res.json();

          if (!data.success) {
            console.error("Login failed:", data.message || "Unknown error");
            return null;
          }

          const safeUser: IUser = {
            id: data.data.id,
            name: data.data.name,
            email: data.data.email,
            image: data.data.image,
            role: data.data.role,
          };

          return safeUser;
        } catch (err) {
          console.error("Authorize error:", err);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as IUser).id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
        token.role = (user as IUser).role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        name: token.name,
        email: token.email,
        image: token.image as string,
        role: token.role as string,
      };
      return session;
    },
  },

  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
