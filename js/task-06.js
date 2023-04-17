

const refInput = document.querySelector('input[data-length="6"]')
// console.dir(refInput)

refInput.addEventListener("blur", addBorderColor)

function addBorderColor(event) { 
    if (Number(event.target.dataset.length) === event.currentTarget.value.trim().length) {
        event.currentTarget.classList.add("valid")
        event.currentTarget.classList.remove("invalid");
    } else {
        event.currentTarget.classList.add("invalid");
        event.currentTarget.classList.remove("valid");
        

    } 
    
}

