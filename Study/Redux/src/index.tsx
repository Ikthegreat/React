import { createStore } from "redux";

const plus = document.getElementById("plus") as HTMLButtonElement | null;
const minus = document.getElementById("minus") as HTMLButtonElement | null;
const number = document.querySelector("span") as HTMLSpanElement | null;

const initialCount: number = 0;

const countModifier = (count = initialCount, action: { type: string }) => {
  if (action.type === "PLUS") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  }
  return count;
};

const onChange = () => {
  if (number) {
    number.innerText = countStore.getState().toString();
  }
};

const countStore = createStore(countModifier);

countStore.subscribe(onChange);

if (plus) {
  plus.addEventListener("click", () => {
    countStore.dispatch({ type: "PLUS" });
  });
}

if (minus) {
  minus.addEventListener("click", () => {
    countStore.dispatch({ type: "MINUS" });
  });
}

export {};
