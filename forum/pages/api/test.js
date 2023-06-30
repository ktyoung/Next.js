// 서버 기능 만들기
// root 폴더에 pages/api 폴더 생성
// → /api/test로 GET/POST/PUT/DELETE/PATCH 등 요청하면 이 파일의 코드를 실행함

export default function handler(request, response) {
  if (request.method == "POST") {
    return response.status(200).json("POST 요청됨");
  } else if (request.method == "GET") {
    return response.status(200).json("GET 요청됨");
  }
}
