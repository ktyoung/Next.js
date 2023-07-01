import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  // document 수정은 .updateOne({수정할게시물정보}, {$set: {수정할내용}})

  return (
    <div className="p-20">
      <h4>글 수정</h4>
      <form action="/api/post/edit" method="POST">
        <input type="text" name="title" defaultValue={result.title} />
        <input type="text" name="content" defaultValue={result.content} />
        <input type="hidden" name="_id" defaultValue={result._id} />
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
