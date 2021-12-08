const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

const createElement = (arr) => {
  for (const ingredient of arr) {
    let element = document.createElement("li");
    element.classList.add("item");
    element.textContent = ingredient;
    ingredientsListRef.append(element);
  }
};

createElement(ingredients);
