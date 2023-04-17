



const refEl = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output") 

}

refEl.input.addEventListener("input", onInput)


function onInput(event) {
    let result = event.currentTarget.value.trim(); 
    if (result === "") {
        result = "Anonymous"
        
    }

    refEl.span.textContent = result 
    return result
}

