// dynamic route 만들려면 [폴더명]
// → detail/[contents] 의미: detail/아무거나
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  // DB에서 1개의 게시물만 가져오려면 .findOne({찾을document정보})
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <h1>상세페이지</h1>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
