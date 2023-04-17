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


// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.