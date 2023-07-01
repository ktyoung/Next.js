"use client";

import { useEffect, useState } from "react";

export default function Comment(props) {
  let [comment, setComment] = useState("");
  let [data, setData] = useState([]);

  // client component 로드 시 서버에 데이터 요청하려면:
  // → 보통 ajax, 타이머 기능을 useEffect 내부에 작성함
  useEffect(() => {
    fetch("/api/comment/list?id=" + props._id)
      .then((r) => r.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }, []);

  return (
    <div>
      <div>댓글목록</div>
      <hr />
      {data.length > 0
        ? data.map((a, i) => {
            return <p key={i}>{a.content}</p>;
          })
        : "댓글 없음"}
      <input
        type="text"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          console.log(comment);
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, _id: props._id }),
          });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
