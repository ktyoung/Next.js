// NextAuth 라이브러리 세팅

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "e056ce9011e5f293204b",
      clientSecret: "b64c911c8d7db3115c86bd0e275fd12320fa27a6",
    }),
  ],
  secret: "1q2w3e4r",
};
export default NextAuth(authOptions);
