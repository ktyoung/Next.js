// DB에 있는 게시글 내용 출력하는 서버 기능

import { connectDB } from "@/util/database";

export default async function handler(request, response) {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  response.status(200).json(result);
}
