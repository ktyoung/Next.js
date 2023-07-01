import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  if (request.method == "POST") {
    // JSON → object 변환은 JSON.parse()
    // console.log(request.body);

    // const db = (await connectDB).db("forum");
    // document 삭제는 deleteOne({삭제할document정보})
    // await db.collection("post").deleteOne({ _id: new ObjectId(request.body) });

    // response.status(200).json("삭제완료");
    // return response.redirect(302, "/list");

    // 본인이 작성한 글만 삭제할 수 있는 기능(update)
    let session = await getServerSession(request, response, authOptions);

    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .findOne({ _id: new ObjectId(request.body) });

    if (result.author == session.user.email) {
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(request.body) });
      return response.status(200).json("삭제완료");
    } else {
      return response.status(500).json("현재 유저와 작성자 불일치");
    }
  }
}
