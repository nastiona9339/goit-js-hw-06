

const elemRef = {
    input: document.getElementById("font-size-control"),
    span: document.getElementById("text")
}

console.log(elemRef.input.valueAsNumber);

elemRef.span.style.fontSize = elemRef.input.valueAsNumber + "px" 

elemRef.input.addEventListener("input", changeSpan)

function changeSpan(event) {

    elemRef.span.style.fontSize = `${event.currentTarget.valueAsNumber}px`


}