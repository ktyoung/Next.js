export default function Write() {
  return (
    <div>
      <h4>글작성</h4>
      {/* 서버로 POST 메서드 요청하려면 <form> */}
      <form action="/api/test" method="POST">
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
