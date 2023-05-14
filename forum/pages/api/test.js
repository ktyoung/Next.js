export default function handler(request, response) {
  response.status(200).json("처리 완료"); // 서버는 요청을 받았을 때 응답을 해주는 것이 좋음
  // → 서버기능 처리 성공 시에는 status(200)
  // → 서버기능 처리 실패 시에는 status(500)
  // → 유저 잘못으로 서버기능 처리 실패 시에는 status(400)
}
