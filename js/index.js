//Write your Javascript code here
console.log("Shoppinglist")

// Opgave 1
function createNewLi(text){
    let newLi = document.createElement("li");

    newLi.setAttribute("id", "list");

    newLi.setAttribute("class", "healthy");

    const textNode = document.createTextNode(text);
    newLi.appendChild(textNode);

    return newLi;
}

// Opgave 2
function AddLiToElement(){
    
}





