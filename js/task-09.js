function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body')
const textColorRef = document.querySelector('.color')
const changeColorBtnRef = document.querySelector('.change-color')

changeColorBtnRef.addEventListener('click', onChangeColor)

function onChangeColor () {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  textColorRef.textContent = color; 
}
