import { Ship } from "./ship";

export function createGameContainer(playerOne, playerTwo) {
  const div = document.createElement("div");
  div.id = "game-container";

  const playerOneContainer = createPlayerContainer(playerOne);
  const playerTwoContainer = createPlayerContainer(playerTwo);

  div.appendChild(playerOneContainer);
  div.appendChild(playerTwoContainer);

  return div;
}

function createPlayerContainer(player) {
  const div = document.createElement("div");
  div.classList.add("player-container");
  div.dataset.player = `${player.name}`;

  const title = document.createElement("h1");
  title.textContent = `${player.name}'s board`;
  title.classList.add("player-container-title");

  const playerBoard = createPlayerBoard(player);

  div.appendChild(title);
  div.appendChild(playerBoard);

  return div;
}

function createPlayerBoard(player) {
  const div = document.createElement("div");
  div.classList.add("board-container");
  div.style.gridTemplateColumns = `repeat(10, 2.5rem)`;
  div.style.gridTemplateRows = `repeat(10, 2.5rem)`;

  updatePlayerBoard(player, div);

  return div;
}

export function updatePlayerBoard(player, container) {
  container.innerHTML = "";

  player.board.board.forEach((row) => {
    row.forEach((cell) => {
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      cellElement.addEventListener("mouseover", () => {
        console.log("test");
      });
      if (cell instanceof Ship) cellElement.classList.add("ship");
      else if (cell === "miss") cellElement.classList.add("miss");
      else cellElement.classList.add("none");

      container.appendChild(cellElement);
    });
  });
}
