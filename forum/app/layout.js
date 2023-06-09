import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LogoutBtn from "./LogoutBtn";
import { cookies } from "next/headers";
import DarkMode from "./DarkMode";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  // 로그인한 유저의 정보 출력은:
  let session = await getServerSession(authOptions);
  console.log(session);

  // 쿠키는 server component에서도 사용 가능
  let res = cookies().get("mode");
  console.log(res);

  return (
    <html>
      <body
        className={res != undefined && res.value == "dark" ? "dark-mode" : ""}
      >
        <div className="navbar">
          <Link href="/" className="logo">
            Forum
          </Link>
          <Link href="/list">List</Link>
          {session != null ? (
            <div>
              <p>{session.user.name}</p>
              <LogoutBtn />
            </div>
          ) : (
            <LoginBtn />
          )}
          <DarkMode />
        </div>
        {children}
      </body>
    </html>
  );
}
