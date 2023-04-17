


// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


// створює перемінну
// витаскую елементи по кліку


let counterValue = 0

const refEl = {
    decrButton: document.querySelector('button[data-action="decrement"]'),
    incrButton: document.querySelector('button[data-action="increment"]'),
    spanCounter: document.querySelector("#value"),

}

refEl.decrButton.addEventListener("click", onDecrButton)
refEl.incrButton.addEventListener("click", onIncreButton)


function onDecrButton() {
    counterValue -= 1
    console.dir(refEl.spanCounter);
    refEl.spanCounter.textContent = counterValue
}


function onIncreButton() {
    counterValue += 1 
    console.dir(refEl.spanCounter);
    refEl.spanCounter.textContent = counterValue
}


