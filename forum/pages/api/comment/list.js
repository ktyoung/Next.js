import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  // 유저가 보낸 게시글 id
  console.log(request.query);

  const db = (await connectDB).db("forum");
  let result = await db
    .collection("comment")
    // .find({검색조건})
    .find({ parent: new ObjectId(request.query._id) })
    .toArray();
  response.status(200).json(result);
}
