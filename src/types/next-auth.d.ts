// next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      /** Varsayılan alanlar dışında rol de eklendi */
      role?: "admin" | "user" | string;
    } & DefaultSession["user"];
  }

  interface User {
    role?: "admin" | "user" | string;
  }
}
