const listOfItems = document.querySelector("#categories")
console.log(`Number of categories: ${listOfItems.children.length}`)


// function getAmount(arr) {
//     let totalItem = 0
//     arr.forEach(item => totalItem += 1)
//     return console.log(`Number of categories: ${totalItem}`)
// }

// getAmount(Array.from(listOfItems.children))



function getNamesCategories(parent) {
    const nodeList = parent.children
    const arr = Array.from(nodeList)


    arr.forEach(item => {
        console.log(`Category: ${item.firstElementChild.textContent}
    `)
        const lastChildQuantity = item.lastElementChild
        console.log(`Elements: ${lastChildQuantity.children.length}`)
    })

}

getNamesCategories(listOfItems)





