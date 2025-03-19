//Write your Javascript code here
console.log("Shoppinglist")

// Opgave 1
function createNewLi(text, liId, liClass){
    let newLi = document.createElement("li");

    newLi.setAttribute("id", liId);

    newLi.setAttribute("class", liClass);

    const textNode = document.createTextNode(text);
    newLi.appendChild(textNode);



    return AppendToList("list",newLi);
}

// Opgave 2
function AppendToList(listId, elementToAppend){
    document.getElementById(listId).append(elementToAppend)
}

createNewLi("smør", 5, "healty")



