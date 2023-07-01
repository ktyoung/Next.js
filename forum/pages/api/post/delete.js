import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method == "POST") {
    // JSON → object 변환은 JSON.parse()
    console.log(request.body);

    const db = (await connectDB).db("forum");
    // document 삭제는 deleteOne({삭제할document정보})
    await db.collection("post").deleteOne({ _id: new ObjectId(request.body) });

    response.status(200).json("삭제완료");
    // return response.redirect(302, "/list");
  }
}
