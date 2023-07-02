"use client";

import { useState } from "react";

// 글 작성 페이지 (POST 요청)

export default async function Write() {
  let [src, setSrc] = useState("");

  return (
    <div className="p-20">
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글제목" />
        <input name="content" placeholder="글내용" />
        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            let file = e.target.files[0];
            let filename = encodeURIComponent(file.name);
            let res = await fetch("/api/post/image?file=" + filename);
            res = await res.json();

            //S3 업로드
            const formData = new FormData();
            Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
              formData.append(key, value);
            });
            let uploadRes = await fetch(res.url, {
              method: "POST",
              body: formData,
            });
            console.log(uploadRes);

            if (uploadRes.ok) {
              setSrc(uploadRes.url + "/" + filename);
            } else {
              console.log("실패");
            }

            console.log(src);
          }}
        />

        <img src={src} />

        <button type="submit">전송</button>
      </form>
    </div>
  );
}
