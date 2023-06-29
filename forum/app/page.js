import { connectDB } from "@/util/database";

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div>
      <p>안녕하세요, 메인페이지입니다.</p>
    </div>
  );
}
