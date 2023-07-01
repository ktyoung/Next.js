import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./ListItem";

export default async function List(props) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
