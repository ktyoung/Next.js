"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DarkMode() {
  let router = useRouter();

  useEffect(() => {
    // mode라는 쿠키가 있는지 검사
    let cookieName = ("; " + document.cookie)
      .split(`; mode=`)
      .pop()
      .split(";")[0];

    // mode라는 쿠키가 없으면: 쿠키 생성
    if (cookieName == "")
      document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
  }, []);

  return (
    <span
      onClick={() => {
        let cookieName = ("; " + document.cookie)
          .split(`; mode=`)
          .pop()
          .split(";")[0];

        if (cookieName == "light") {
          document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400;
          router.refresh();
        } else {
          document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
          router.refresh();
        }
      }}
    >
      🌙
    </span>
  );
}
