import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

// list2는 새로운 글을 작성해도 실시간 반영이 안 됨 (캐싱 기능)
export const revalidate = 20;

export default async function List(props) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
