// Next.js 컴포넌트는 종류가 2개
// 1-1. server component : 로딩 속도 빠름, 검색엔진 노출 유리
//      → html에 자바스크립트 기능 넣기 불가능
//      → useState, useEffect 등 사용 불가
// 1-2. client component : 로딩속도 느림(자바스크립트 필요, hydration 필요)
//      → 자바스크립트 기능 및 useState, useEffect 등 사용 가능
// 1-3. 큰 페이지는 server component, JS기능 필요한 곳만 client component

import { Welcome, subTitle, title } from "./data";

export default function Cart() {
  return (
    <div>
      <h4 className="title">{title}</h4>
      <Welcome />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
