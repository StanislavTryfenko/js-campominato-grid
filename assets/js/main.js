
// Create grid
for(let i = 1; i <= 100; i++){
    // Create an "li" node:
    const li = document.createElement("li");

    // Add a class to "li":
    li.classList.add("box")

    // Create a text node:
    let liText = document.createTextNode(i);
        
    // Append the text node to the "li" node:
    li.appendChild(liText);
   
    // Append the "li" node to the list:
    document.getElementById("grid").appendChild(li);
}

const boxArray = document.getElementsByClassName('box')
//console.log(boxArray);

// Add event listener for any box
for (let i = 0; i < boxArray.length; i++) {
    const element = boxArray[i];

    element.addEventListener('click', function(e) {
        element.classList.toggle('blue')
        console.log(element.textContent);
    });
}
