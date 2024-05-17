import { createGameContainer } from "./modules/domManager";
import { Player } from "./modules/player";
import { Gameboard } from "./modules/gameBoard";
import { Ship } from "./modules/ship";
import "./styles.css";

function initializeGame() {
  const body = document.querySelector("body");

  let ship, position, orientation, attackPosition;

  const playerOne = new Player("real", new Gameboard(), "Player One");
  ship = new Ship(2);
  position = [0, 0];
  orientation = "horizontal";
  attackPosition = [2, 3];
  playerOne.board.place(ship, position, orientation);
  playerOne.board.receiveAttack(attackPosition);

  console.log(playerOne.board);

  const playerTwo = new Player("real", new Gameboard(), "Player Two");
  ship = new Ship(3);
  position = [5, 3];
  orientation = "vertical";
  playerTwo.board.place(ship, position, orientation);
  console.log(playerTwo.board);

  body.appendChild(createGameContainer(playerOne, playerTwo));
}

initializeGame();
