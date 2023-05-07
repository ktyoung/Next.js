// 1. 최적화된 이미지 사용하기
// → 이미지 lazy loading & 사이즈 최적화 & layout shift 방지
// 1-1. Image 태그 import
// 1-2. 사용할 이미지 import
// 1-3. 원하는 곳에서 <Image /> 컴포넌트 사용

import Image from "next/image";
import food0 from "/public/food0.png";

export default function List() {
  let product = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h2 className="title">상품목록</h2>
      {product.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={"/food" + i + ".png"} alt="토마토" className="food-img" />
            {/* <Image src={food0} alt="토마토" className="food-img" /> */}
            {/* 외부 이미지를 사용하려면 width, height 속성 필요
            next.config.js 세팅 필요
            <Image src="https://s3.amazonaws.com/my-bucket/profile.png" width="500" height="500"/> */}
            <h4>{a} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
