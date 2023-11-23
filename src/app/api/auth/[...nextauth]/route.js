import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import { useRouter } from "next/navigation";
// to enable fingerprinting
//AuthCore
// import Auth from "@auth/core";
// import Passage from "@auth/core/providers/passage";

// const request = new Request(origin);
// const response = await Auth(request, {
//   providers: [
//     Passage({
//       clientId: 'aSNUdwNpbZ60t9s2KyBjVUVe',
//       clientSecret: '78MjOCzV71fgPJB1Yyj2K5mpnanEn3CL',
//       issuer: 'https://wrong-lavenderblush-clam.withpassage.com/',
//     }),
//   ],
// });

import {Auth} from "@auth/core"
import Passage from "@auth/core/providers/passage"

const request = new Request(origin)
const response = await Auth(request, {
  providers: [Passage({ clientId:'aSNUdwNpbZ60t9s2KyBjVUVe', clientSecret:'78MjOCzV71fgPJB1Yyj2K5mpnanEn3CL', 
  issuer: 'https://wrong-lavenderblush-clam.withpassage.com/' })],
})

const handler =  NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
    
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Folake Ndubusi" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const router = useRouter();

        const res = await fetch("http://localhost:3001/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        })
        const user = await res.json();
        if (user) {
            return user === 200 && router.push("/carpark");
  
          } else {
            return null;
          }
       
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      // this would redirect unauthenticated users to homepage
      if(!session){
        redirect("/");
      }
      return session;
      
    },
  },
});



export { handler as GET, handler as POST }
