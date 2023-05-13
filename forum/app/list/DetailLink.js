"use client";

// Client Component 안에서 사용할 수 있는 useRouter()

import { useRouter } from "next/navigation";

export default function DetailLink() {
  let router = useRouter();
  // let url = usePathname();               → 현재 URL 출력
  // let searchParams = useSearchParams();  → Search Parameter 출력
  // let dynamicRoute = useParams();        → [dynamic route] 입력한 내용 출력
  return (
    <button
      onClick={() => {
        router.push("/");
        // router.back()        → 뒤로가기
        // router.forward()     → 앞으로가기
        // router.refresh()     → 변경된 내용만 새로고침(브라우저의 새로고침과 다름)
        // router.prefetch()    → 페이지 미리로드
      }}
    >
      버튼
    </button>
  );
}
