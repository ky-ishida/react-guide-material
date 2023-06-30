// querySelector・・オブジェクトとして取得する
const h1Element = document.querySelector("h1");
console.log(h1Element.outerHTML);

const btnE1 = document.querySelector("button");
btnE1.addEventListener("click", () => {
  console.log("hello");
});
