// Turn Counter
let Counter = 0
// X and O win tracker
let X = 0
let O = 0

function Clicker(box){
    // Determines the player Turn, and puts it into a booelan
    let playerTurn = (document.getElementById("Player").innerHTML == "Player: X") ? true : false
    let Player = document.getElementById("Player")
    // gets the box that is clicked
    let boxer = document.getElementById(box)
    // Checks if the box has been clicked, if it has then it will not be clickable again
    if(boxer.innerHTML == ""){
    // This is true, if its true then it would be an X, and it would change Player: to O, and then run the function to see if any wins occur
    if(playerTurn){
        boxer.innerHTML = "X"
        // boxer.innerHTML = "B";
        Player.innerHTML = "Player: O";

        winnerWinnerChickenDinner();
        // adds to turn tracker, and updates it
        Counter++;
        document.getElementById("Turn").innerHTML = "Turn: " + Counter
    }
    // If its false, then it will be Player O, who will do the same thing as above but with O
    else{
        boxer.innerHTML = "O"
        Player.innerHTML = "Player: X";
        winnerWinnerChickenDinner();
        Counter++;
        document.getElementById("Turn").innerHTML = "Turn: " + Counter

    }
}
}
// Checks the winner
function winnerWinnerChickenDinner() {
    // this just makes it much simpler to go through every box to see if any won, and if it has it will go to index 1, and grab the full div so that it can highlight it.
    let boxes = [
       [document.getElementById("Box-Top-Left"),document.getElementById("Box-Top-left-Div")],
        [document.getElementById("Box-Top-Middle"),document.getElementById("Box-Top-Middle-Div")],
        [document.getElementById("Box-Top-Right"),document.getElementById("Box-Top-Right-Div")],
        [document.getElementById("Box-Middle-Left"),document.getElementById("Box-Middle-Left-Div")],
        [document.getElementById("Box-Middle-Middle"),document.getElementById("Box-Middle-Middle-Div")],
        [document.getElementById("Box-Middle-Right"),document.getElementById("Box-Middle-Right-Div")],
        [document.getElementById("Box-Bottom-Left"),document.getElementById("Box-Bottom-Left-Div")],
        [document.getElementById("Box-Bottom-Middle"),document.getElementById("Box-Bottom-Middle-Div")],
        [document.getElementById("Box-Bottom-Right"),document.getElementById("Box-Bottom-Right-Div")],
    ];
    // All the indexes the loop will go through
    const winCombos = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8],   
        [0, 3, 6],   
        [1, 4, 7],   
        [2, 5, 8],   
        [0, 4, 8],   
        [2, 4, 6]
    ];
// Makes valueA, B, and C into the inside of each list inside the list.
    for (let x of winCombos) {
        let [a, b, c] = x;
        let valueA = boxes[a][0].innerHTML;
        let valueB = boxes[b][0].innerHTML;
        let valueC = boxes[c][0].innerHTML;
    // If they all equal, then it means you won.
        
        if (valueA && valueA === valueB && valueB === valueC) {

            document.getElementById("Winner").innerHTML = "Winner: " + valueA;
            // Makes it black
            document.getElementById("Winner").style.color="Black";
            // Adds divs to class winning, whihc has a different color
            boxes[a][1].classList.add("winning");
            boxes[b][1].classList.add("winning");
            boxes[c][1].classList.add("winning");
            // Makes it unclickable
            document.getElementById("Box").style.pointerEvents = "none";
            // alert(valueA);
            // alert(valueA)
            if(valueA == "X"){
                X++;
            }
            else if(valueA == "O"){
                O++;
            }


        }      

        // else{
        //     alert("TIE")

        // }
    }
    // Checks if its tied
    if (Counter == 8){
        console.log("Tie")
    } 
    // else{

    // }
}

function Reseter() {
    // Puts everything back to default value
    document.getElementById("Box-Top-Left").innerHTML = "";
    document.getElementById("Box-Top-Middle").innerHTML = "";
    document.getElementById("Box-Top-Right").innerHTML = "";
    document.getElementById("Box-Middle-Left").innerHTML = "";
    document.getElementById("Box-Middle-Middle").innerHTML = "";
    document.getElementById("Box-Middle-Right").innerHTML = "";
    document.getElementById("Box-Bottom-Left").innerHTML = "";
    document.getElementById("Box-Bottom-Middle").innerHTML = "";
    document.getElementById("Box-Bottom-Right").innerHTML = "";
    document.getElementById("Box-Top-left-Div").classList.remove("winning");
    document.getElementById("Box-Top-Middle-Div").classList.remove("winning");
    document.getElementById("Box-Top-Right-Div").classList.remove("winning");
    document.getElementById("Box-Middle-Left-Div").classList.remove("winning");
    document.getElementById("Box-Middle-Middle-Div").classList.remove("winning");
    document.getElementById("Box-Middle-Right-Div").classList.remove("winning");
    document.getElementById("Box-Bottom-Left-Div").classList.remove("winning");
    document.getElementById("Box-Bottom-Middle-Div").classList.remove("winning");
    document.getElementById("Box-Bottom-Right-Div").classList.remove("winning");
    Counter = 0
    document.getElementById("Turn").innerHTML = "Turn: " + Counter
    document.getElementById("Winner").innerHTML = "TIC-TAC-TOE"
    document.getElementById("Winner").style.color="#EFDECD";
    document.getElementById("Box").style.pointerEvents = "all";
    document.getElementById("X").innerHTML = "X: " + X;
    document.getElementById("O").innerHTML = "O: " +O;

}
