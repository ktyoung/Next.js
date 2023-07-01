// 로딩 중 UI는 loading.js
// → page.js 옆에 loading.js 라는 이름으로 파일 만들어두면,
//   page.js 로드 전에 loading.js 안의 내용을 미리 보여줌

export default function Loading() {
  return (
    <div>
      <h4>로딩 중!</h4>
    </div>
  );
}
