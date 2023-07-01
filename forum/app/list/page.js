import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

// static rendering, dynamic rendering
// 1. ○ static rendering: 빌드 당시 html페이지를 그대로 유저에게 보냄
// 2. λ dynamic rendering: 유저가 접속할 때마다 html 새로 만들어서 보냄

// (문제) npm run build 시, list 페이지가 static rendering으로 처리됨
// → 게시글 작성, 삭제 시 html에 반영되지 않음!
// (해결 방법) 렌더링 전략 수정 후 다시 빌드
export const dynamic = "force-dynamic";

export default async function List(props) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
