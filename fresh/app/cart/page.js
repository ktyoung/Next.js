// 1. props 문법
// 1-1. <자식Component 작명="전송할데이터" />
// 1-2. 자식은 props.작명

export default function Cart() {
  let product = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem product={product[0]} />
      <CartItem product={product[1]} />
      <Banner card="롯데카드" />
      <Banner card="현대카드" />
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.product}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

function Banner(props) {
  return <h5>{props.card} 결제 행사 중</h5>;
}
