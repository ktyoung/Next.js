import { connectDB } from "@/util/database";

// DB 출력 결과를 캐싱하려면?
// 1. fetch()로 API를 요청하면 됨
// 2. 또는 revalidate 예약변수 사용(페이지단위 캐싱 가능)
export const revalidate = 60;

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  // 캐싱 기능 사용하기
  // await fetch("/URL", { cache: "force-cache" });

  // 매번 서버로 요청해서 새로운 데이터 가져오려면(실시간 데이터 사용 시):
  // await fetch("/URL", { cache: "no-store" });

  // 60초마다 캐싱된 데이터 갱신하기:
  // await fetch("/URL", { next: { revalidate: 60 } });

  return (
    <div>
      <p>안녕하세요, 메인페이지입니다.</p>
    </div>
  );
}
