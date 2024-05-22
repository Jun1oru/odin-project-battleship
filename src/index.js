import { gameController } from "./modules/gameController";
import { domController } from "./modules/domManager";
import "./styles.css";

function initializeGame() {
  const body = document.querySelector("body");
  body.innerHTML = "";

  const dom = domController();

  const game = dom.game;
  const players = game.players;

  body.appendChild(dom.createGameContainer(players[0], players[1]));
  const playAgainButton = document.getElementById("playAgainButton");
  playAgainButton.addEventListener("click", initializeGame);
}

initializeGame();
