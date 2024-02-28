// Press play to start
document.getElementById('play').addEventListener('click', function(){

    // Take difficulty level
    difficulty = Number(document.getElementById('difficulty').value);
    //console.log(difficulty);

    // Declare bombNumb for switch
    let boxNumb;

    // Switch game mode
    switch (difficulty) {
        //Easy
        case 1:
            boxNumb = 100;
            document.getElementById('grid').style.width = '500px'
        break;

        // Medium
        case 2:
            boxNumb = 81;
            document.getElementById('grid').style.width = '450px'
        break;
    
        //Hard
        case 3:
            boxNumb = 49;
            document.getElementById('grid').style.width = '350px'
        break;
    }

    //Cler grid for when u change game difficulty
    document.getElementById('grid').innerHTML= ' ';   

    // Create grid for the difficulty
    for(let i = 1; i <= boxNumb; i++){
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

    // Take list of box as array
    const boxArray = document.getElementsByClassName('box');
    //console.log(boxArray);

    // Add event listener for any box with for cycle in array
    for (let i = 0; i < boxArray.length; i++) {
        const element = boxArray[i];

        element.addEventListener('click', function(e) {
        element.classList.toggle('blue');
        console.log(element.textContent);
        });
    }   
});
