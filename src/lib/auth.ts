import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/login/signin',
      },
    providers: [
        CredentialsProvider({
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            username: { label: "Username", type: "text" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if (!credentials?.username || !credentials?.password) {
              console.error('Credentials are missing or incomplete.');
              return null;
            }
          
            console.log('Received credentials:', credentials);
          
            const existingUser = await db.user.findUnique({
              where: { username: credentials.username }
            });
          
            console.log('Existing user:', existingUser);
          
            if (!existingUser) {
              console.log('User not found.');
              return null;
            }
          
            const passwordMatch = await compare(credentials.password, existingUser.password);
          
            if (!passwordMatch) {
              console.log('Password does not match.');
              return null;
            }
          
            console.log('Authentication successful.');

            return {
              id: existingUser.id.toString(),
              companyName: existingUser.companyName,
              username: existingUser.username,
            };
          }
        })
      ],
      callbacks: {
        async jwt({ token, user }) {
          console.log(token, user);
          if(user){
          }
          if(user){
            return {
              ...token,
              companyName: user.companyName
            }
          }
          return token
        },
        async session({ session, token }) {
          return {
            ...session,
            user: {
              ...session.user,
              companyName: token.companyName
            }
          }
        },
      }

      }
