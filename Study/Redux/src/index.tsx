const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count: number = 0;

if (number) {
  number.innerText = count.toString();
}

const updateText = () => {
  if (number) {
    number.innerText = count.toString();
  }
};

const handlePlus = () => {
  count += 1;
  updateText();
};

const handleMinus = () => {
  count -= 1;
  updateText();
};

if (plus) {
  plus.addEventListener("click", handlePlus);
}

if (minus) {
  minus.addEventListener("click", handleMinus);
}

export {};
