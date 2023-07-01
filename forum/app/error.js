"use client";

// 에러 페이지는 error.js
// 1. 항상 client component만 넣을 수 있음
// 2. error라는 props 출력 해보면 에러 내용 알려줌
// 3. reset이라는 props를 ( ) 붙여서 실행하면 해당 페이지를 다시 로드
// 4. page.js 부분만 error.js로 바꿔줌 (에러가 발생해도 다른 UI들은 남아있음!)

export default function Error({ error, reset }) {
  return (
    <div>
      <h4>에러!</h4>
    </div>
  );
}
