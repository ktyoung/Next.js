"use client";

import Image from "next/image";
import food0 from "/public/food0.png";
import { useState } from "react";

export default function List() {
  let product = ["Tomatoes", "Pasta", "Coconut"];
  let [count, setCount] = useState(0);

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
                setCount(count - 1);
              }}
            >
              -
            </button>
            <span>{count}</span>
            <button
              onClick={() => {
                setCount(count + 1);
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
