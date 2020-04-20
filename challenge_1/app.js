let board;
let turn = true;
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
    if (xCount === 3 || oCount === 3) {
      console.log('WINNER');
    }
    xCount = 0;
    oCount = 0;
  });
}

const eventHandler = (event) => {
  if (event.target.innerHTML !== 'X' && event.target.innerHTML !== 'O' && event.target.id !== 'gameboard') {
    if (turn) {
      event.target.innerHTML = 'X';
      board[event.target.id[6]] = 'X';
      turn = false;
      checkWinner();
    } else {
      event.target.innerHTML = 'O';
      board[event.target.id[6]] = 'O';
      turn = true;
      checkWinner();
    }
  }
}

const element = document.getElementById('gameboard');
element.addEventListener('click', eventHandler, false);

const render = () => {
  board.forEach((mark, i) => {
    document.getElementById("square" + i).innerHTML = mark;
  });
}

const initiate = () => {
  board = ['', '', '', '', '', '', '', '', ''];
  turn = true;
  render();
}

initiate();

const clear = document.getElementById('reset');
clear.addEventListener('click', initiate, false);
