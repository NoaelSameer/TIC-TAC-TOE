let Counter = 0
let X = 0
let O = 0
function Clicker(box){
    // console.log("hi")
    let playerTurn = (document.getElementById("Player").innerHTML == "Player: X") ? true : false
    let Player = document.getElementById("Player")
    let boxer = document.getElementById(box)
    // alert(playerTurn)
    if(boxer.innerHTML == ""){
    if(playerTurn){
        boxer.innerHTML = "X"
        // boxer.innerHTML = "B";
        Player.innerHTML = "Player: O";
        winnerWinnerChickenDinner();
        Counter++;
        document.getElementById("Turn").innerHTML = "Turn: " + Counter
    }
    else{
        boxer.innerHTML = "O"
        Player.innerHTML = "Player: X";
        winnerWinnerChickenDinner();
        Counter++;
        document.getElementById("Turn").innerHTML = "Turn: " + Counter
    }
}
}
function winnerWinnerChickenDinner() {
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

    for (let x of winCombos) {
        let [a, b, c] = x;
        let valueA = boxes[a][0].innerHTML;
        let valueB = boxes[b][0].innerHTML;
        let valueC = boxes[c][0].innerHTML;
        
        if (valueA && valueA === valueB && valueB === valueC) {

            document.getElementById("Winner").innerHTML = "Winner: " + valueA;
            document.getElementById("Winner").style.color="Black";
            boxes[a][1].classList.add("winning");
            boxes[b][1].classList.add("winning");
            boxes[c][1].classList.add("winning");
            document.getElementById("Box").style.pointerEvents = "none";
            // alert(valueA);
            // alert(valueA)
            if(valueA == "X"){
                X++;
            }
            else if(valueA == "O"){
                O++;
            }
            // else{
            //     alert("hi")
            // }

        }
    }
}

function Reseter() {
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
    // document.getElementById("Box-").classList.remove("winning");
    // document.getElementById("Box-").classList.remove("winning");
    // document.getElementById("Box-").classList.remove("winning");

}
// Counter = 7
//     if(List[1]){
//         console.log("hi")
//     }
//     // if (box1 == box2 && box2 == box3){
//     //     console.log(box1);
//     // }
//     if (box4 == box5 && box5 == box6){
//         console.log(box4);
//     }
//     if (box7 == box8 && box8 == box9){
//         console.log(box7)
//     }
//     if(box1 == box5 && box5 == box9){
//         console.log(box1)
//     }

// }