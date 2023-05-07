// 1. map() 함수 기능
// 1-1. array에 들어있는 자료의 개수만큼 코드 반복 실행
// 1-2. 첫 번째 파라미터에 array에 들어있는 자료가 순서대로 저장
// 1-3. return() 내부에 자료를 작성하면 array에 담아줌

export default function List() {
  let product = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h2 className="title">상품목록</h2>
      {product.map((a, i) => {
        return (
          // map 반복문 사용 시 key={유니크한값} 속성 추가
          <div className="food" key={i}>
            <h4>{a} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
