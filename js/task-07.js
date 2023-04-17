// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const elemRef = {
    input: document.getElementById("font-size-control"),
    span: document.getElementById("text")
}

elemRef.input.addEventListener("input", changeSpan)

function changeSpan(event) {

    elemRef.span.style.fontSize = event.currentTarget.valueAsNumber + "px"


}