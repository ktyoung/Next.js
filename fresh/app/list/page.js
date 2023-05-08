"use client";

import Image from "next/image";
import food0 from "/public/food0.png";
import { useState } from "react";

// 1. array, object 자료형 state 변경
// 1-1. ... 연산자로 복사해서 수정

export default function List() {
  let product = ["Tomatoes", "Pasta", "Coconut"];
  let [count, setCount] = useState([0, 0, 0]);

  return (
    <div>
      <h2 className="title">상품목록</h2>
      {product.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={"/food" + i + ".png"} alt="토마토" className="food-img" />
            <h4>{a} $40</h4>
            <button
              onClick={() => {
                let copy = [...count]; // 독립적인 array로 복사 → deep copy
                copy[i]--;
                setCount(copy);
              }}
            >
              -
            </button>
            <span>{count[i]}</span>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i]++;
                setCount(copy);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
