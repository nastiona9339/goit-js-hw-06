// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.





// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


const refInput = document.querySelector('input[data-length="6"]')
// console.dir(refInput)

refInput.addEventListener("blur", addBorderColor)

function addBorderColor(event) { 
    if (Number(event.target.dataset.length) === event.target.value.trim().length) {
        event.currentTarget.classList.add("valid")
        event.currentTarget.classList.remove("invalid");
    } else {
        event.currentTarget.classList.add("invalid");
        event.currentTarget.classList.remove("valid");
        

    } 
    
}

