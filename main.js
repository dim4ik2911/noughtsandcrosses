//declared variables
const squares = document.querySelectorAll(".square");
let noughts = document.getElementById("noughts");
let crosses = document.getElementById("crosses");
const result = document.getElementById("result");
const restart = document.getElementById("next-round");

//function to disable restart button
//function for next round

restart.addEventListener("click", () => {
  const squaresArray = Array.from(squares);
  if (restart.innerHTML == "NEXT ROUND") {
    squaresArray.map((square) => {
      square.style.backgroundColor = "#23bb49";
      square.innerHTML = "";
    });
    restart.innerHTML = "&nbsp;";
    result.innerHTML = "&nbsp;";
  }
  if (restart.innerHTML == "RESTART A GAME") {
    squaresArray.map((square) => {
      square.style.backgroundColor = "#23bb49";
      square.innerHTML = "";
    });
    noughts.innerHTML = 0;
    crosses.innerHTML = 0;
    restart.innerHTML = "&nbsp;";
    result.innerHTML = "&nbsp;";
  }
});

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

//checking clicking
for (let index = 0; index < squares.length; index++) {
  squares[index].addEventListener("click", () => {
    if (squares[index].innerHTML !== "") {
      return; //stops the function
    }
    if (isPlayerOneTurn) {
      if (
        restart.innerHTML == "RESTART A GAME" ||
        restart.innerHTML == "NEXT ROUND"
      ) {
        squares[index].innerHTML = "&#128540;";
      } else {
        result.innerHTML = "&nbsp;";
        restart.innerHTML = "&nbsp;";
        squares[index].innerHTML = "X";

        squares[index].style.backgroundColor = "blue";

        isPlayerTwoTurn = true;
        isPlayerOneTurn = false;
      }
    } else {
      if (
        restart.innerHTML == "RESTART A GAME" ||
        restart.innerHTML == "NEXT ROUND"
      ) {
        squares[index].innerHTML = "&#128540;";
      } else {
        result.innerHTML = "&nbsp;";
        restart.innerHTML = "&nbsp;";
        squares[index].innerHTML = "0";

        squares[index].style.backgroundColor = "red";

        isPlayerOneTurn = true;
        isPlayerTwoTurn = false;
      }
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
        if (crosses.innerHTML == "&nbsp;" || crosses.innerHTML == 0) {
          crosses.innerHTML = 1;
          if (noughts.innerHTML == "&nbsp;") {
            noughts.innerHTML = 0;
          }

          result.innerHTML = "CROSSES WON A ROUND";
          restart.innerHTML = "NEXT ROUND";
        } else {
          crosses.innerHTML = parseInt(crosses.innerHTML) + 1;
          result.innerHTML = "CROSSES WON A ROUND";
          restart.innerHTML = "NEXT ROUND";
        }
        if (crosses.innerHTML == 5) {
          result.innerHTML = "CROSSES WON A GAME";
          restart.innerHTML = "RESTART A GAME";
        }
      } else {
        if (noughts.innerHTML == "&nbsp;" || noughts.innerHTML == 0) {
          noughts.innerHTML = 1;
          if (crosses.innerHTML == "&nbsp;") {
            crosses.innerHTML = 0;
          }

          result.innerHTML = "NOUGHTS WON A ROUND";
          restart.innerHTML = "NEXT ROUND";
        } else {
          noughts.innerHTML = parseInt(noughts.innerHTML) + 1;
          result.innerHTML = "NOUGHTS WON A ROUND";
          restart.innerHTML = "NEXT ROUND";
        }
        if (noughts.innerHTML == 5) {
          result.innerHTML = "NOUGHTS WON A GAME";
          restart.innerHTML = "RESTART A GAME";
        }
      }
    }
  });
}

//function that restarts the game
// for (let index = 0; index < squares.length; index++) {
//   restart.addEventListener("click", () => {
//     // if (squares[index].innerHTML == "x" || squares[index].innerHTML == "0") {
//     return (squares[index].innerHTML = "");
//   });
// }
// for (let index = 0; index < squares.length; index++) {
//   restart.addEventListener("click", () => {
//     // if (squares[index].innerHTML == "x" || squares[index].innerHTML == "0") {
//     return (squares[index].style.backgroundColor = "#29bd00");
//   });
// }
// for (let index = 0; index < squares.length; index++) {
//   restart.addEventListener("click", () => {
//     // if (squares[index].innerHTML == "x" || squares[index].innerHTML == "0") {
//     return (result.innerHTML = `&nbsp;`);
//   });
// }
// for (let index = 0; index < squares.length; index++) {
//   restart.addEventListener("click", () => {
//     // if (squares[index].innerHTML == "x" || squares[index].innerHTML == "0") {
//     return (restart.innerHTML = `&nbsp;`);
//   });
// }
