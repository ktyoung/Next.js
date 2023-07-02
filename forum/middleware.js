import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// 유저가 GET, POST 요청 시:
// 1. middleware.js 코드 먼저 실행
// 2. 서버 코드 실행
export async function middleware(request) {
  //   console.log(request.nextUrl); // 유저가 요청 중인 URL
  //   console.log(request.cookies); // 유저의 cookie
  //   console.log(request.headers); // 유저의 headers 정보(개인정보)

  // middleware 코드 작성 후 아래 코드 중 하나를 실행해야함!
  //   NextResponse.next(); // 통과
  //   NextResponse.redirect(); // 다른 페이지로 강제 이동(주소창 변경)
  //   NextResponse.rewrite(); // 다른 페이지로 강제 이동(주소창 유지)

  // 1. /list 페이지 접속 시 접속 기록 저장하기
  if (request.nextUrl.pathname.startsWith("/list")) {
    console.log(request.headers.get("sec-ch-ua-platform")); // OS 정보
    return NextResponse.next();
  }

  // 2. 로그인 안 된 유저가 /write 페이지 접속하면 다른 페이지로 보내기
  const session = await getToken({ req: request });
  if (request.nextUrl.pathname.startsWith("/write")) {
    if (session == null) {
      return NextResponse.redirect("http://localhost:3000/api/auth/signup");
    }
  }

  // 3. 쿠키 생성하기
  request.cookies.get("cookieName"); // 출력
  request.cookies.has("cookieName"); // 존재확인
  request.cookies.delete("cookieName"); // 삭제

  const response = NextResponse.next();
  response.cookies.set({
    name: "mode",
    value: "dark",
    maxAge: 3600,
    httpOnly: true, // 자바스크립트로 쿠키 조작 방지 가능
  });
  return response; // 쿠키생성
}
