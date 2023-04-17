

const divFirst = document.querySelector("#controls")
const [input, buttonCreate, buttonDestroy] = divFirst.children
const boxes = document.querySelector("#boxes")


buttonCreate.addEventListener("click", onCreatClick)
buttonDestroy.addEventListener("click", destroyBoxes)


function onCreatClick(event) {
  const num = input.valueAsNumber
  createBoxes(num)

}


function createBoxes(amount) {
  const arr = []
  for (let i = 0; i < amount; i += 1) { 
    let div = document.createElement("div")
    div.style.backgroundColor = getRandomHexColor()
    div.style.width = (30 + i*10) +"px"
    div.style.height = (30 + i * 10) + "px"
    arr.push(div)
  }
  boxes.append(...arr)
}

console.dir(boxes);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function destroyBoxes() {
boxes.innerHTML = ""
}
