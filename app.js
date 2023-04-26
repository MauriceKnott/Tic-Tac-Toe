const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""]

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
    const squares = document.querySelectorAll(".field");
    console.log(squares)
        })

    }


return {
    render,
}
})();
   
const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        players = [
            // createPlayer(document.querySelector("#player1").value, "X"),
            // createPlayer(document.querySelector("#player2").value, "O")
        ]
        currentPlayerIndex = 0;
        gameOver = 0;
        Gameboard.render()
    }

    const handleClick = (event) => {
        console.log(event.target.id)
    }
    
    return {
       start, handleClick
    }
})();



    const createPlayer = (name, marker) => {
        return {name, marker};
    }

    const moveBtn = document.querySelectorAll(".field");

    moveBtn.forEach((moveBtn) =>{
        moveBtn.addEventListener('click', Game.handleClick, function() {
            Game.start();
            const btn = document.createElement("p");
            moveBtn.innerText = 'x';
            moveBtn.appendChild(btn);
            console.log(moveBtn)
        });
    
      });

    




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