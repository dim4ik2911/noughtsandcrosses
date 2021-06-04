//declared variables
const squares = document.querySelectorAll(".square");

// winning combinations
const firstRow = [squares[0], squares[1], squares[2]];
const secondRow = [squares[3], squares[4], squares[5]];
const thirdRow = [squares[6], squares[7], squares[8]];

const firstColumn = [squares[0], squares[3], squares[6]];
const secondColumn = [squares[1], squares[4], squares[7]];
const thirdColumn = [squares[2], squares[5], squares[8]];

const firstDiagonal = [squares[0], squares[4], squares[8]];
const secondDiagonal = [squares[2], squares[4], squares[6]];

//control turns
let isPlayerOneTurn = true;
let isPlayerTwoTurn = false;

//check winning condition
const checkWinningCondition = (squares) => {
  const innerHTMLArray = squares.map((square) => {
    return square.innerHTML;
  });
  const toCheck = innerHTMLArray.join("");

  if (toCheck === "XXX" || toCheck === "000") {
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

      squares[index].style.backgroundColor = "blue";

      isPlayerTwoTurn = true;
      isPlayerOneTurn = false;
    } else {
      squares[index].innerHTML = "0";

      squares[index].style.backgroundColor = "red";

      isPlayerOneTurn = true;
      isPlayerTwoTurn = false;
    }
    const firstRowWin = checkWinningCondition(firstRow);
    const secondRowWin = checkWinningCondition(secondRow);
    const thirdRowWin = checkWinningCondition(thirdRow);

    const firstColumnWin = checkWinningCondition(firstColumn);
    const secondColumnWin = checkWinningCondition(secondColumn);
    const thirdColumnWin = checkWinningCondition(thirdColumn);

    const firstDiagonalWin = checkWinningCondition(firstDiagonal);
    const secondDiagonalWin = checkWinningCondition(secondDiagonal);

    if (
      firstRowWin == true ||
      secondRowWin == true ||
      thirdRowWin == true ||
      firstColumnWin == true ||
      secondColumnWin == true ||
      thirdColumnWin == true ||
      firstDiagonalWin == true ||
      secondDiagonalWin == true
    ) {
      if (isPlayerTwoTurn) {
        result.innerHTML = "NOUGHTS WON A ROUND";
        restart.innerHTML = "NEXT ROUND";
        score1.innerHTML++;
      } else {
        result.innerHTML = "CROSSES WON A ROUND";
        restart.innerHTML = "NEXT ROUND";
        score2.innerHTML++;
      }
    }
  });
}

//function that restarts the game
const restart = document.getElementById("next-round");
const result = document.getElementById("result");
for (let index = 0; index < squares.length; index++) {
  restart.addEventListener("click", () => {
    // if (squares[index].innerHTML == "x" || squares[index].innerHTML == "0") {
    return (squares[index].innerHTML = "");
  });
}
for (let index = 0; index < squares.length; index++) {
  restart.addEventListener("click", () => {
    // if (squares[index].innerHTML == "x" || squares[index].innerHTML == "0") {
    return (squares[index].style.backgroundColor = "#29bd00");
  });
}
for (let index = 0; index < squares.length; index++) {
  restart.addEventListener("click", () => {
    // if (squares[index].innerHTML == "x" || squares[index].innerHTML == "0") {
    return (result.innerHTML = `&nbsp;`);
  });
}
for (let index = 0; index < squares.length; index++) {
  restart.addEventListener("click", () => {
    // if (squares[index].innerHTML == "x" || squares[index].innerHTML == "0") {
    return (restart.innerHTML = `&nbsp;`);
  });
}
