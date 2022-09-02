const groceries = ["pearl onions"," cremini mushrooms", "thyme"];

let newList = groceries.map((groceryItem,i)=>{
    return `<li>${groceryItem}</li>`
})

console.log(newList)


