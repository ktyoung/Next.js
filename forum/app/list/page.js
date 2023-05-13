import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List(props) {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          {/* <Link> 태그에도 prefetch 기능 내장되어 있음 */}
          <Link
            // prefetch={false}
            href={"/detail/" + result[i]._id}
            style={{
              fontSize: "20px",
              fontWeight: "800",
              margin: "0",
              color: "#333333",
              textDecoration: "none",
            }}
          >
            <h4>{a.title}</h4>
          </Link>
          <DetailLink />
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
