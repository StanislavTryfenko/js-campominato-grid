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

    // Create list of wrong boxes
    const boxWrong = [];
    for (let i = 1; i <= 16; i++) {
        const numberRandom = Math.floor(Math.random() * boxNumb);
        if (boxWrong.includes(numberRandom)) {
            i--
        }else{
            boxWrong.push(numberRandom);
        }
    }
    console.log(boxWrong);
    
    // Add event listener for any box with for cycle in array
    for (let i = 0; i < boxArray.length; i++) {
        const boxClicked = boxArray[i];
        
        boxClicked.addEventListener('click', function(e) {
            
            // setting boxes safe or wrong
            if (boxWrong.includes(i)) {
                boxClicked.classList.add('wrong_box');   
            } else{
                boxClicked.classList.add('safe_box');
            }

            // Winning/looses actions
            if (document.getElementsByClassName('wrong_box').length != 0) {
                console.log('lose');
            } else if ((boxNumb - document.getElementsByClassName('safe_box').length)  === boxWrong.length) {
                console.log('Win');
            }
        });
    }
});
