// Press play to start
document.getElementById('play').addEventListener('click', function(){

    const boxNumb = document.getElementById('difficulty').value;

    // Set grid dimension
    document.getElementById('grid').style.width = `calc(50px * ${Math.sqrt(boxNumb)})`;

    //Cler grid for when u change game difficulty
    document.getElementById('grid').innerHTML= ' ';
    //Clear result for when u restart a game
    document.getElementById('result').innerHTML= ' ';

    // Create grid for the difficulty
    for(let i = 1; i <= boxNumb; i++){
        boxCreate();
    }

    // Take list of box as array
    const boxArray = document.getElementsByClassName('box');

    // Create list of wrong boxes
    const boxWrong = [];
    for (let i = 1; i <= 1; i++) {
        boxWrongCreate(boxWrong, boxNumb, i);
    }
    console.log(boxWrong); //(UNCOMMENT FOR DEBUGGING)
    
    // Add event listener for any box with for cycle in array
    for (let i = 0; i < boxArray.length; i++) {
        const boxClicked = boxArray[i];
        
        boxClicked.addEventListener('click', function(e) {
            // check if game is not lost
            if((document.getElementsByClassName('wrong_box').length < 1) && (Number(boxNumb) - (boxWrong.length) != (document.getElementsByClassName('safe_box').length))) {
                // setting boxes safe or wrong
                boxCheck(boxClicked, boxWrong, i);

                // Winning/looses actions
                endGame(boxNumb, boxWrong);
            }
        });
    };
});
    
// #region FUNCTIONS 

    function boxCreate() {
        // Create an "li" node:
        const li = document.createElement("li");

        // Add a class to "li":
        li.classList.add("box")
        
        // Create a text node: (if needed for not clicked box)
        //let liText = document.createTextNode(i);
                
        // Append the text node to the "li" node:
        //li.appendChild(liText);
           
        // Append the "li" node to the list:
        document.getElementById("grid").appendChild(li);
    }

    function boxWrongCreate(boxWrong, boxNumb, i) {
        const numberRandom = Math.floor(Math.random() * boxNumb);
        if (boxWrong.includes(numberRandom)) {
            i--
        }else{
            boxWrong.push(numberRandom);
        }
    }

    function boxCheck(boxClicked, boxWrong, i) {
        // setting boxes safe or wrong
        if (boxWrong.includes(i)) {
            boxClicked.classList.add('wrong_box');   
        } else{
            boxClicked.classList.add('safe_box');
        }
    }

    function endGame(boxNumb, boxWrong) {
        //LOSE
        if (document.getElementsByClassName('wrong_box').length != 0) {
            const text = (`YOU LOSE, your score is: ${document.getElementsByClassName('safe_box').length}`);
            document.getElementById('result').innerText = (text);
        } 
        //WIN
        else if ((boxNumb - document.getElementsByClassName('safe_box').length)  === boxWrong.length) {
            const text = (`YOU WIN, your score is: ${document.getElementsByClassName('safe_box').length}`);
            document.getElementById('result').innerText = (text);
        }
        
    }

// #endregion 