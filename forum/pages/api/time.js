// 현재 시간 출력하는 서버 기능

export default function handler(request, response) {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let today =
    year +
    "년 " +
    month +
    "월 " +
    day +
    "일 " +
    hours +
    "시 " +
    minute +
    "분 " +
    second +
    "초";
  response.status(200).json(today);
}
