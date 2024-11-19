const boardArray = [];

resetArray();
showUI();
playGame();

function resetArray() {
    const rows = 3;
    const columns = 3;
    boardArray.length = 0;
    for (let i = 0; i < rows * columns; i++) {
        boardArray.push(0);
    }
}

function showUI() {
    const gameReset = document.querySelector(".gameReset");
    const gameContainer = document.querySelector(".gameContainer");
    const gameResult = document.querySelector(".gameResult");
    
    gameReset.addEventListener("click", () => {
        resetArray();
        showUI();
        playGame();
    });
    
    gameContainer.innerHTML = "";
    for (let i = 0; i < boardArray.length; i++) {
        const gameField = document.createElement("div");
        gameField.classList.add("gameField");
        gameField.setAttribute("ID", i);
        gameContainer.appendChild(gameField);
    };
    
    gameResult.textContent = "";
}

function playGame() {
    const gameFields = document.querySelectorAll(".gameField");
    let player = 1;
    
    gameFields.forEach((gameField) => {
        gameField.addEventListener("click", () => {
            if (player == 1) {
                boardArray[gameField.getAttribute("ID")] = 1;
                gameField.textContent = "x";
                console.log(boardArray)
            } else {
                boardArray[gameField.getAttribute("ID")] = 2;
                gameField.textContent = "o";
                console.log(boardArray) 
            }
            checkWin();
            player = (player == 1) ? 2 : 1;
        });
    });
    
    function checkWin() {
        const winArrays = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        for (let i = 0; i < winArrays.length; i++) {
            const position = winArrays[i];
            if(boardArray[position[0]] == boardArray[position[1]] &&
                boardArray[position[1]] == boardArray[position[2]] &&
                boardArray[position[2]] != 0) {
                    document.getElementById("popupText").textContent = `Player ${player} wins!`;
                    popupFn();
                    // const gameResult = document.querySelector(".gameResult");
                    // gameResult.textContent = `Player ${player} wins!`;
                    break;
            }
        } 
    }
}

function popupFn() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popupDialog").style.display = "block";
}

function closeFn() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popupDialog").style.display = "none";
    resetArray();
    showUI();
    playGame();
}