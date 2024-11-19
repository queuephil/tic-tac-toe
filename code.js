// the game can be displayed as an array of 9
// every array element can be empty = 0 / player1 = 1 / player2 = 2
// there are winning patterns that have to be checked

const boardArray = [];
const rows = 3;
const columns = 3;
for (let i = 0; i < rows * columns; i++) {
    boardArray.push(0);
}

for (let i = 0; i < 9; i++) {
    let inputPlayer1 = prompt("player1");
    boardArray[inputPlayer1] = 1;
    // checkWin();
    console.log(boardArray);

    let inputPlayer2 = prompt("player2");
    boardArray[inputPlayer2] = 2;
    // checkWin();
    console.log(boardArray);
}


// functions
function checkWin() {
    const winArrays = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let gameStatus = false;
    for (let i = 0; i < winArrays.length; i++) {
        const position = winArrays[i];
        if(boardArray[position[0]] == boardArray[position[1]] &&
            boardArray[position[1]] == boardArray[position[2]] &&
            boardArray[position[2]] != 0) {
                gameStatus = true;
                break;
        }
    } 
    console.log(gameStatus);           
}

