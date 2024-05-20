import { gameController } from "./modules/gameController";
import { domController } from "./modules/domManager";
import "./styles.css";

function initializeGame() {
  const body = document.querySelector("body");

  const dom = domController();

  const game = dom.game;
  const players = game.players;
  let activePlayer = game.activePlayer;

  body.appendChild(dom.createGameContainer(players[0], players[1]));
  // let ship, position, orientation, attackPosition;

  // const playerOne = new Player("real", new Gameboard(), "Player One");
  // ship = new Ship(2);
  // position = [0, 0];
  // orientation = "horizontal";
  // attackPosition = [2, 3];
  // playerOne.board.place(ship, position, orientation);
  // playerOne.board.receiveAttack(attackPosition);

  // const playerTwo = new Player("real", new Gameboard(), "Player Two");
  // ship = new Ship(3);
  // position = [5, 3];
  // orientation = "vertical";
  // playerTwo.board.place(ship, position, orientation);

  // body.appendChild(createGameContainer(playerOne, playerTwo));
}

initializeGame();
