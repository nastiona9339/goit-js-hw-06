

const refElem = {
  body: document.querySelector("body"),
  button: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
}

refElem.button.addEventListener("click", onClick) 


function onClick() {
  const color = getRandomHexColor()
  refElem.body.style.backgroundColor = color
  refElem.span.textContent = color
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


