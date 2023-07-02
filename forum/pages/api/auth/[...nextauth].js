// Next-auth 라이브러리 세팅
// Next-auth 라이브러리는 기본적으로 모든 방식이 JWT

import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "dca7bdc7278510d96560",
      clientSecret: "0bda44a50a3f7dd6f92533b38cc18b3475bc6c80",
    }),

    CredentialsProvider({
      // 1. 로그인 페이지 폼 자동 생성하는 코드
      name: "credentials",
      credentials: {
        // 로그인 페이지에 들어갈 input들
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      // 2. 로그인 요청 시 실행되는 코드
      // 직접 DB에서 아이디, 비밀번호 비교
      // → 아이디, 비밀번호 일치하면 return 결과, 다르면 return null
      async authorize(credentials) {
        let db = (await connectDB).db("forum");
        let user = await db
          .collection("user_cred")
          .findOne({ email: credentials.email });
        if (!user) {
          console.log("해당 이메일은 없음");
          return null;
        }
        const pwcheck = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!pwcheck) {
          console.log("비번틀림");
          return null;
        }
        return user;
      },
    }),
  ],

  // 3. jwt 써놓아야 잘 됨 + jwt 만료일 설정
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30일(로그인 상태 유지 기간)
  },

  callbacks: {
    // 4. jwt 만들 때 실행되는 코드
    // user변수는 DB의 유저 정보가 담겨 있고, token.user에 데이터를 저장하면 jwt에 들어감
    jwt: async ({ token, user }) => {
      if (user) {
        // jwt에 기입할 정보
        token.user = {};
        token.user.name = user.name;
        token.user.email = user.email;
      }
      return token;
    },
    // 5. 유저 세션이 조회 될 때마다 실행되는 코드
    session: async ({ session, token }) => {
      // 컴포넌트 안에서 보여줄 유저 정보
      session.user = token.user;
      return session;
    },
  },

  adapter: MongoDBAdapter(connectDB),
  secret: "1q2w3e4r",
};
export default NextAuth(authOptions);
