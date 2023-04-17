const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const refUl = document.querySelector("#ingredients")


function namesLi(arr) {
  const arrLi = arr.map(ingredient => {
    const createLi = document.createElement("li")
    createLi.textContent = ingredient;
    createLi.classList.add("item")
    return createLi
  })
  return arrLi
}


const finalLi = namesLi(ingredients)

refUl.append(...finalLi)

