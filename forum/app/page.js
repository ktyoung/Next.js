// 1. MongoDB 세팅
// 1-1. npm install mongodb
// 1-2. db 접속 → util/database.js에 세팅 코드 작성

// 2. DB 입출력 코드는 server comoponent 안에서만 사용하는 것이 좋음
import { connectDB } from "@/util/database";

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return <div></div>;
}
