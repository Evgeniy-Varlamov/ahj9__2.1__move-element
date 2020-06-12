const createBoard = (count) => {
  const board = document.getElementsByClassName('game-board')[0];
  let html = '';
  for (let i = 1; i <= count; i += 1) {
    html += '<div class="field"></div>';
  }
  board.innerHTML = html;
};

const randomInteger = (max) => {
  const rand = Math.random() * (max + 1);
  return Math.floor(rand);
};

const gameStart = () => {
  createBoard(16);
  const fields = document.getElementsByClassName('field');
  const img = '<img class="goblin" src="goblin.png">';
  const maxIndex = fields.length - 1;
  let lastIndex;
  let index;
  setInterval(() => {
    index = randomInteger(maxIndex);
    if (index === lastIndex) {
      index += 1;
      if (index > maxIndex) index = 0;
    }
    fields.item(index).innerHTML = img;
    fields.item(lastIndex).innerHTML = '';
    lastIndex = index;
  }, 1000);
};

gameStart();
