import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method == "POST") {
    const db = (await connectDB).db("forum");
    let modify = { title: request.body.title, content: request.body.content };

    // document 수정은 .updateOne({수정할게시물정보}, {$set: {수정할내용}})
    await db
      .collection("post")
      .updateOne({ _id: new ObjectId(request.body._id) }, { $set: modify });

    return response.redirect(302, "/list");
  }
}
