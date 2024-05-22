import { Ship } from "./ship";
import { Game } from "./gameController";

export function domController() {
  const game = new Game();
  const gameController = game.controller;
  gameController.randomGame();

  const createGameContainer = (playerOne, playerTwo) => {
    const div = document.createElement("div");
    div.id = "game-container";

    const gameOver = createDialog();
    gameOver.close();
    const title = createTitle();
    const playerOneContainer = createPlayerContainer(playerOne);
    const playerTwoContainer = createPlayerContainer(playerTwo);

    div.appendChild(gameOver);
    div.appendChild(title);
    div.appendChild(playerOneContainer);
    div.appendChild(playerTwoContainer);

    return div;
  };

  const createDialog = () => {
    const dialog = document.createElement("dialog");
    const div = document.createElement("div");
    div.id = "gameOverDiv";

    const gameOverTitle = document.createElement("h1");
    gameOverTitle.id = "gameOverTitle";
    gameOverTitle.textContent = "Game over, you won!";

    const playAgainButton = document.createElement("button");
    playAgainButton.id = "playAgainButton";
    playAgainButton.textContent = "Play Again!";

    div.appendChild(gameOverTitle);
    div.appendChild(playAgainButton);

    dialog.appendChild(div);

    return dialog;
  };

  const createTitle = () => {
    const title = document.createElement("h1");
    title.classList.add("game-title");
    title.textContent = "Battleship";

    return title;
  };

  const createPlayerContainer = (player) => {
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
  };

  const createPlayerBoard = (player) => {
    const div = document.createElement("div");
    div.classList.add("board-container");
    player.container = div;

    div.style.gridTemplateColumns = `repeat(10, 1.5rem)`;
    div.style.gridTemplateRows = `repeat(10, 1.5rem)`;

    updatePlayerBoard(player, div);

    return div;
  };

  const resetPlayerBoard = (player, container) => {
    container.innerHTML = "";
    container.dataset.active = player.active === true ? "false" : "true";
  };

  const updatePlayerBoard = (player, container) => {
    resetPlayerBoard(player, container);

    player.board.board.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        const index = rowIndex * 10 + cellIndex;
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        cellElement.dataset.index = index;
        cellElement.addEventListener("click", cellClickHandler);
        cellElement.player = player;
        if (cell instanceof Ship) {
          const isHitPosition = [rowIndex, cellIndex];
          if (
            cell.hitPositions.some((position) =>
              position.every(
                (value, posIndex) => value === isHitPosition[posIndex],
              ),
            )
          ) {
            cellElement.classList.add("hit");
          } else {
            cellElement.classList.add("ship");
          }
        } else if (cell === "miss") cellElement.classList.add("miss");
        else cellElement.classList.add("none");

        container.appendChild(cellElement);
      });
    });
  };

  const computerState = {
    previousMoves: new Set(),
    hits: [],
    targets: [],
    orientation: null,
    initialHit: null,
  };

  const cellClickHandler = (e) => {
    const cell = e.target;
    const container = cell.parentNode;
    const dialog = document.querySelector("dialog");
    const gameOverTitle = document.getElementById("gameOverTitle");
    if (container.dataset.active === "true") {
      const x = Math.floor(cell.dataset.index / 10),
        y = cell.dataset.index % 10;
      const result = gameController.playRound(x, y);
      if (result === "over") {
        dialog.show();
        gameOverTitle.textContent = `Game over, you won!`;
        // const winner = gameController.players[0];
        // winner.container.innerHTML = "Winner";
        // container.innerHTML = "Loser";

        return;
      } else {
        if (result === "miss") gameController.switchPlayerTurn();
        if (gameController.getActivePlayer().type === "computer") {
          const computerResult =
            gameController.playComputerRound(computerState);
          if (result === "over") {
            dialog.show();
            gameOverTitle.textContent = `Game over, you lost!`;
            // const winner = gameController.players[1];
            // winner.container.innerHTML = "Winner";
            // gameController.players[0].container.innerHTML = "Loser";

            return;
          }
          gameController.switchPlayerTurn();
        }
        updatePlayerBoard(
          gameController.players[0],
          gameController.players[0].container,
        );
        updatePlayerBoard(
          gameController.players[1],
          gameController.players[1].container,
        );
      }
    }
  };

  return {
    createGameContainer,
    updatePlayerBoard,
    game,
  };
}
