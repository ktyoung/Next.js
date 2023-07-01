import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  if (request.method == "POST") {
    // 현재 로그인한 유저 정보 (민감한 개인 정보는 유저가 직접 보내면 안 됨!)
    let session = await getServerSession(request, response, authOptions);
    console.log(session);

    if (session) {
      request.body.author = session.user.email;
      console.log(request.body);
    }

    // console.log(request.body); // 유저가 보낸 데이터(input에 입력한 데이터)

    // 예외처리: 제목을 작성하지 않았을 때
    if (request.body.title == "") {
      return response.status(500).json("제목을 작성하세요.");
    }

    // 예외처리: DB 에러
    // → try 블록 내부 코드에서 에러가 발생하면, catch 블록 내부의 코드를 실행함
    try {
      const db = (await connectDB).db("forum");
      // DB에 document 발행하려면 → insertOne(데이터)
      let result = await db.collection("post").insertOne(request.body);
      // 응답과 동시에 페이지를 이동시키려면
      // → redirect(302, "/경로")
      return response.redirect(302, "/list");
    } catch (error) {}
  }
}
