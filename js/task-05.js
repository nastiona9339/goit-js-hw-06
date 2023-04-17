// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".



const refEl = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output") 

}

refEl.input.addEventListener("input", onInput)


function onInput(event) {
    let result = event.target.value.trim(); 
    if (result === "") {
        result = "Anonymous"
        
    }

    refEl.span.textContent = result 
    return result
}

