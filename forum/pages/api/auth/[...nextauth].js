// Next-auth 라이브러리 세팅
// Next-auth 라이브러리는 기본적으로 모든 방식이 JWT

import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
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
  // DB adapter 세팅(session 방식 사용)
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
