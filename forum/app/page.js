import { connectDB } from "@/util/database";

export default async function Home() {
  // DB 입출력 코드는 Server Component 안에서만 사용하기
  const db = (await connectDB).db("forum");

  // 컬렉션의 모든 document 꺼내오기
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div>
      <p>안녕하세요.</p>
    </div>
  );
}
