"use client";

import { useRouter } from "next/navigation";

export default function DetailLink() {
  // useRouter는 client component에서만 사용 가능
  let router = useRouter();

  return (
    <button
      onClick={() => {
        // router.push("이동할 경로")
        // router.back() → 뒤로가기
        // router.forward() → 앞으로가기
        // router.refresh() → 바뀐 내용만 새로고침(soft refresh)
        // router.prefetch("/detail/...") → 페이지 미리 로드
        router.push("/");
      }}
    >
      메인페이지로 이동
    </button>
  );
}
