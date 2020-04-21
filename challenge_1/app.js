let board;
let turn = true;
let xWins = 0;
let oWins = 0;
let playerX = document.getElementById('player1-score');
let playerO = document.getElementById('player2-score');
const winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const checkWinner = () => {
  let xCount = 0;
  let oCount = 0;
  winning.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
      if (board[element[i]] === 'X') {
        xCount++;
      } else if (board[element[i]] === 'O') {
        oCount++;
      }
    }
    if (xCount === 3) {
      alert('Player X is the Winner!');
      xWins++;
      playerX.innerHTML = xWins;
      initiate(true);
    } else if (oCount === 3) {
      alert('Player O is the Winner!');
      oWins++;
      playerO.innerHTML = oWins;
      initiate(false);
    }
    xCount = 0;
    oCount = 0;
  });
  let count = 0;
  board.forEach((element) => {
    if (element[0]) {
      count++;
    }
    if (count === 9) {
      alert('Draw!');
    }
  });
}

const eventHandler = (event) => {
  if (event.target.innerHTML !== 'X' && event.target.innerHTML !== 'O' && event.target.id !== 'gameboard') {
    if (turn) {
      event.target.innerHTML = 'X';
      board[event.target.id[6]] = 'X';
      turn = false;
    } else {
      event.target.innerHTML = 'O';
      board[event.target.id[6]] = 'O';
      turn = true;
    }
  }
  checkWinner();
}

const element = document.getElementById('gameboard');
element.addEventListener('click', eventHandler, false);

const render = () => {
  board.forEach((mark, i) => {
    document.getElementById("square" + i).innerHTML = mark;
  });
}

const initiate = (bool) => {
  board = ['', '', '', '', '', '', '', '', ''];
  if (bool !== undefined) {
    turn = bool;
  } else {
    turn = true;
  }
  render();
}

initiate();

const clear = document.getElementById('reset');
clear.addEventListener('click', initiate, false);
