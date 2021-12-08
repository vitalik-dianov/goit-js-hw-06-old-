let counterVal = 0;
const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);

const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);

const counterRef = document.querySelector("#value");

const incrementValue = () => {
  counterVal += 1;
  counterRef.textContent = counterVal;
};
const decrementValue = () => {
  counterVal -= 1;
  counterRef.textContent = counterVal;
};
decrementBtnRef.addEventListener("click", decrementValue);
incrementBtnRef.addEventListener("click", incrementValue);
