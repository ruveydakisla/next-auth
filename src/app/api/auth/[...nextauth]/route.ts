import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER!,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(
            "https://dev-pzlf83plp8g4fw4j.us.auth0.com/oauth/token",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                grant_type: "http://auth0.com/oauth/grant-type/password-realm",
                username: credentials?.email,
                password: credentials?.password,
                audience: process.env.AUTH0_AUDIENCE,
                client_id: process.env.AUTH0_CLIENT_ID,
                client_secret: process.env.AUTH0_CLIENT_SECRET,
                scope: "openid email offline_access",
                realm: "Username-Password-Authentication",
              }),
            }
          );

          const data = await res.json();

          if (!res.ok) {
            console.error("Auth Token Error:", data);
            return null;
          }

          const userInfo = await fetch(
            "https://dev-pzlf83plp8g4fw4j.us.auth0.com/userinfo",
            {
              headers: {
                Authorization: `Bearer ${data.access_token}`,
              },
            }
          );

          const profile = await userInfo.json();

          // Burada mutlaka role ekle, örneğin user olarak:
          return {
            id: profile.sub,
            email: profile.email,
            name: profile.name,
            role: profile.role, // ya da burayı profil bilgilerine göre ayarla
          };
        } catch (error) {
          console.error("Error:", error);
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/sign-in", // opsiyonel, hata sayfası
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log(user);
        
        // İlk login’de user objesinden rolü token içine ekle
        token.role = user.role 
      }
      return token;
    },

    async session({ session, token }) {
      // Client tarafına session içine rolü ekle
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
