"use client";

import { signIn } from "next-auth/react";
import { useEffect } from "react";

export default function LoginBtn() {
  // Next.js에서의 local storage 사용 방법 (client component에서만 사용 가능)
  // useEffect(() => {
  //   if (typeof window != "undefined") { // → 현재 위치가 브라우저인지, 서버인지?
  //     let res = localStorage.setItem("mode", "dark");
  //   }
  // }, [localStorage.getItem("mode")]);

  return (
    <button
      onClick={() => {
        signIn();
      }}
    >
      로그인
    </button>
  );
}
