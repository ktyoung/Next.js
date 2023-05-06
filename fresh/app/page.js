// 1. Next.js에서 라우팅을 하려면
// 1-1. app폴더 안에 폴더 생성(폴더명 == 경로명)
// 1-2. 1에서 생성한 폴더 안에 page.js 생성
// 1-3. 레이아웃 작성

// 2. 공통UI는 layout.js에 넣기

export default function Home() {
  let title = "Fresh";
  let name = "Kim";
  return (
    <div>
      <h4 className="title" style={{ fontSize: "30px" }}>
        {title}
      </h4>
      <p class="title-sub">By Dev {name}</p>
    </div>
  );
}
