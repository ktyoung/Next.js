"use client";

import Link from "next/link";

export default function ListItem(props) {
  return (
    <div>
      {props.result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link prefetch={false} href={"/detail/" + a._id}>
              <h4>{a.title}</h4>
            </Link>
            <Link href={"/edit/" + a._id} className="list-btn">
              ✏️
            </Link>

            {/* Ajax를 사용해도 서버로 요청 가능 → client component에서만 사용 가능 
                장점? form 태그와 달리, 브라우저 새로고침 없이 서버에 요청 가능 */}
            <span
              onClick={(e) => {
                fetch("/api/post/delete", {
                  // DELETE method가 동작하지 않으면 POST 요청하기
                  method: "POST",
                  body: a._id,
                })
                  // 서버가 보낸 메시지를 확인하려면
                  .then((r) => {
                    return r.json();
                  })
                  .then((r) => {
                    // console.log(r);
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  });

                // GET 요청으로 데이터 전송하기
                // 1. query string
                // fetch("URL") 뒤에 ?데이터이름=값으로 데이터를 전송할 수 있음
                // 장점? 간단함, GET 요청도 데이터 전송 가능
                // 단점? 데이터가 많으면 확인이 어려움, URL에 데이터 노출
                // fetch("/api/test?name=kim&age=20")

                // 2. URL parameter
                // fetch("/api/abc/anyString");
              }}
            >
              🗑️
            </span>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
