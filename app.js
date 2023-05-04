
 

// player factory function
const createPlayer = (name, marker) => {
    return {name, marker};
}

// gameboard object
const gameBoard = (() => {

    // generate board array
    let board = [];
    for (i = 0; i < 9; i++) {
        board.push('');
    }

    // // add event listeners on each square
    // Array.from(squares.children).forEach((square, index) => {
    //     square.addEventListener('click', () => {
    //         // display active player marker
    //         square.classList.add(game.activePlayer.marker);
    //         square.setAttribute('data', game.activePlayer.marker);
    //         // update array value to be that of active player
    //         board[index] = game.activePlayer.marker;
    //         // remove event listener from the marked index
    //         square.style.pointerEvents = 'none';
    //         // update remainingSpots
    //         game.remainingSpots -= 1;
    //         // check winner: if all 3 values within any of these conditions are ===...
    //         game.checkWinner();
    //         // check remaining spots
    //         if (game.winnerDeclared == false) {
    //             if (game.remainingSpots > 0) {
    //                 game.alertNextPlayer();
    //                 game.nextPlayer();
    //             } else if (game.remainingSpots == 0) {
    //                 game.declareTie();
    //             }
    //         }
    //     })
    // });

    // return
    return {
        board
    };
})();

// game object
const game = (() => {

    // declare players
    const playerOne = createPlayer('Player 1', 'bolt');
    const playerTwo = createPlayer('Player 2', 'heart');
    const mark = document.querySelectorAll(".field");

    // starting point
    let activePlayer = playerOne;
    let winnerDeclared = false;
    let remainingSpots = 9;

    // selectors
    let subtext = document.querySelector('.subtext'); // display winner/tie
    let playerName = document.querySelector('.player-name'); // purpose: alert player turn

    // winning conditions
    const winningAxes = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    // check winner
    function checkWinner() {
        winningAxes.forEach((item, index) => { // [0, 1, 2, 3, 4, 5, 6, 7]
            if (gameBoard.board[item[0]] === this.activePlayer.marker && gameBoard.board[item[1]] === this.activePlayer.marker && gameBoard.board[item[2]] === this.activePlayer.marker) {
                console.log('winner!');
                subtext.innerHTML = `<b>${this.activePlayer.name} wins!</b>`;
                this.winnerDeclared = true;
            } 
        })
    }

    // alert next player
    function alertNextPlayer() {
        this.activePlayer === playerOne ? playerName.textContent = 'Player 2' : playerName.textContent = 'Player 1';
     
    }

    // next player
    function nextPlayer() {
        this.activePlayer === playerOne ? this.activePlayer = playerTwo : this.activePlayer = playerOne;
      
        console.log('nextPlayer() function ran')
        console.log('active player: ' + activePlayer.name);
    }

function nextMark() {
    this.activePlayer === playerOne ? moveBtn.textContent = 'X' : moveBtn.textContent = 'O';
    console.log(nextMark)
}

    // declare tie
    function declareTie() {
        subtext.innerHTML = "<b>Tie game!</b>";
    }

    // return
    return {
        activePlayer,
        remainingSpots,
        checkWinner,
        alertNextPlayer,
        nextPlayer,
        declareTie,
        winnerDeclared, 
        nextMark
    };
})();


const moveBtn = document.querySelectorAll(".field");

    moveBtn.forEach((moveBtn, index) =>{
        moveBtn.addEventListener('click', function() {
            const btn = document.createElement("p");
       moveBtn.innerText = game.nextMark()
            console.log(moveBtn.id)
            gameBoard.board.push(moveBtn.id)
         console.log(gameBoard.board) 
         moveBtn.classList.add(game.activePlayer.marker);
         moveBtn.setAttribute('data', game.activePlayer.marker);
         // update array value to be that of active player
         gameBoard.board[index] = game.activePlayer.marker;
         // remove event listener from the marked index
         moveBtn.style.pointerEvents = 'none';
         // update remainingSpots
         game.remainingSpots -= 1;
         // check winner: if all 3 values within any of these conditions are ===...
         game.checkWinner();
         // check remaining spots
         if (game.winnerDeclared == false) {
             if (game.remainingSpots > 0) {
                 game.alertNextPlayer();
                 game.nextPlayer();
             } else if (game.remainingSpots == 0) {
                 game.declareTie();
             }
         }
         
        
        });
    
      });


// const Gameboard = (() => {
//     let gameboard = []   //"", "", "", "", "", "", "", "", ""

//     const render = () => {
//         let boardHTML = "";
//         gameboard.forEach((square, index) => {
//     const squares = document.querySelectorAll(".field");
//     console.log(squares)
//         })

//     }

//     const update = (index, value) => {
//         gameboard[index] = value;
//         render()
//     }
    
//     const getGameboard = () => gameboard;


// return {
//     render, gameboard, update, getGameboard
// }
// })();
   
// const Game = (() => {
//     let players = [];
//     let currentPlayerIndex;
//     let gameOver;

//     const start = () => {
//         players = [
//             // createPlayer(document.querySelector("#player1").value, "X"),
//             // createPlayer(document.querySelector("#player2").value, "O")
//         ]
//         currentPlayerIndex = 0;
//         gameOver = 0;
//         Gameboard.render()
//     }

//     const handleClick = (event) => {
//        let index = parseInt(event.target.id.split("-")[1]);
//        if (Gameboard.gameboard [index] !== "")
//        return;

//        Gameboard.update(index, players[cuerrentPlayerIndex].marker);
//         if (Gameboard.gameboard === checkWinner) {
//             alert("YOU WIN!")
//         }
//     //    if (checkWinner(Gameboard.gameboard(), players[cuerrentPlayerIndex].marker)) {
//     //     gameOver = true;
//     //     alert("YOU WIN!")
//     //    }
//        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
        
//     }
//     function checkWinner(cells) {
//         let combs = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6],
//         ];
    
//         for (let comb of combs) {
//             if (
//                 cells[comb[0]].textContent == cells[comb[1]].textContent &&
//                 cells[comb[1]].textContent == cells[comb[2]].textContent &&
//                 cells[comb[0]].textContent != ''
//             ) {
//                 return true;
//             }
//         }
        
//         return false;
//     }


    
//     return {
//        start, handleClick, checkWinner
//     }
// })();



//     const createPlayer = (name, marker) => {
//         return {name, marker};
//     }

//     const moveBtn = document.querySelectorAll(".field");

//     moveBtn.forEach((moveBtn) =>{
//         moveBtn.addEventListener('click', function() {
//             const btn = document.createElement("p");
//             moveBtn.innerText = 'x';
//             console.log(moveBtn.id)
//              Gameboard.gameboard.push(moveBtn.id)
//          console.log( Gameboard.gameboard) 
//         Game.start.checkWinner
         
        
//         });
    
//       });





// try only using module or factory functions, no global scopes
// if you only need one of something use a module, if you need multiple use factory
// Think carefully about where each bit of logic should reside

// 1. setup gameboard as an array inside of a gameboard object
// 2. store players in objects
// 3. create an object to control the flow of the game
// 4. write a js function that will render the contents of the gameboard array to the webpage
// 5. build a function that allow players to add marks to a specific spot
// 6. tie that function with the dom
// 7. allow players to click on a specific spot to add marks
// 8. make a logic so players cant  select a spot thats already filled 
// 9. build logic to check for a 3-in-a-row to apply a game over to the board
// 10. allow players to put their names on interface 
// 11. add a start / restart button 
// 12. add a display element to congratulates the winning player
// OPTIONAL - create an AI to play against player 