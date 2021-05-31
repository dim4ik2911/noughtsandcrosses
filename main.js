//declared variables
const squares = document.querySelectorAll(".square");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");

// winning combinations
const firstRow = [squares[0], squares[1], squares[2], squares[3]];
const secondRow = [squares[4], squares[5], squares[6], squares[7]];
const thirdRow = [squares[8], squares[9], squares[10], squares[11]];
const fourthRow = [squares[12], squares[13], squares[14], squares[15]];

const firstColumn = [squares[0], squares[4], squares[8], squares[12]];
const secondColumn = [squares[1], squares[5], squares[9], squares[13]];
const thirdColumn = [squares[2], squares[6], squares[10], squares[14]];
const fourthColumn = [squares[3], squares[7], squares[11], squares[15]];

const firstDiagonal = [squares[0], squares[5], squares[10], squares[15]];
const secondDiagonal = [squares[3], squares[6], squares[9], squares[12]];

//control turns
let isPlayerOneTurn = true;
let isPlayerTwoTurn = false;

//check winning condition
const checkWinningCondition = (squares) => {
  const innerHTMLArray = squares.map((square) => {
    return square.innerHTML;
  });
  const toCheck = innerHTMLArray.join("");
  // check IF toCheck equals "xxxx" or "0000"; => return true,  else return false

  if (toCheck === "XXXX" || toCheck === "0000") {
    return true;
  } else {
    return false;
  }
};

for (let index = 0; index < squares.length; index++) {
  squares[index].addEventListener("click", () => {
    if (squares[index].innerHTML !== "") {
      return; //stops the function
    }
    if (isPlayerOneTurn) {
      squares[index].innerHTML = "X";
      squares[index].style.backgroundColor = "red";

      isPlayerTwoTurn = true;
      isPlayerOneTurn = false;
    } else {
      squares[index].innerHTML = "0";
      squares[index].style.backgroundColor = "blue";

      isPlayerOneTurn = true;
      isPlayerTwoTurn = false;
    }
    const firstRowWin = checkWinningCondition(firstRow);
    const secondRowWin = checkWinningCondition(secondRow);
    const thirdRowWin = checkWinningCondition(thirdRow);
    const fourthRowWin = checkWinningCondition(fourthRow);

    const firstColumnWin = checkWinningCondition(firstColumn);
    const secondColumnWin = checkWinningCondition(secondColumn);
    const thirdColumnWin = checkWinningCondition(thirdColumn);
    const fourthColumnWin = checkWinningCondition(fourthColumn);

    const firstDiagonalWin = checkWinningCondition(firstDiagonal);
    const secondDiagonalWin = checkWinningCondition(secondDiagonal);

    if (
      firstRowWin == true ||
      secondRowWin == true ||
      thirdRowWin == true ||
      fourthRowWin == true ||
      firstColumnWin == true ||
      secondColumnWin == true ||
      thirdColumnWin == true ||
      fourthColumnWin == true ||
      firstDiagonalWin == true ||
      secondDiagonalWin == true
    ) {
      if (isPlayerTwoTurn) {
        result.innerHTML = "PLAYER 1 IS A WINNER";
        restart.innerHTML = "RESTART";
        score1.innerHTML++;
      } else {
        result.innerHTML = "PLAYER 2 IS A WINNERk";
        restart.innerHTML = "RESTART";
        score2.innerHTML++;
      }
    }
  });
}
