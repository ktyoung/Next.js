export default function Home() {
  let title = "Fresh";
  let name = "Kim";
  return (
    <div>
      <h4 className="title" style={{ fontSize: "30px" }}>
        {title}
      </h4>
      <p class="title-sub">By Dev {name}</p>
    </div>
  );
}
