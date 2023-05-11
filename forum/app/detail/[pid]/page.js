// dynamic route 생성 → [폴더명] → "이 부분에 아무거나 입력했을 때"라는 의미

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  let db = (await connectDB).db("forum");
  // DB에서 게시물 1개만 가져오려면: .findOne({찾을document정보})
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.pid) });

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
