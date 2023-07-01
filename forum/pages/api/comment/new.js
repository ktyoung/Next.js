import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  let session = await getServerSession(request, response, authOptions);
  console.log(session);

  if (request.method == "POST") {
    request.body = JSON.parse(request.body);
    console.log(request.body);
    console.log(session);

    let comment = {
      content: request.body.comment,
      parent: new ObjectId(request.body._id),
      author: session.user.email,
    };

    let db = (await connectDB).db("forum");
    await db.collection("comment").insertOne(comment);

    response.status(200).json("저장완료");
  }
}
