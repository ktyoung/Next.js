import { connectDB } from "@/util/database";

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div>
      <h1>안녕하세요</h1>
      <h3>게시판입니다.</h3>
    </div>
  );
}
