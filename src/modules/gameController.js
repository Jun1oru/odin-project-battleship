import { Player } from "./player";
import { Gameboard } from "./gameBoard";
import { Ship } from "./ship";

export class Game {
  constructor() {
    this.controller = gameController();
    this.players = this.controller.players;
    this.activePlayer = this.controller.getActivePlayer();
  }
}

function gameController() {
  const init = () => {
    const boards = [new Gameboard(), new Gameboard()];
    const players = [
      new Player("real", boards[0], "Player One"),
      new Player("computer", boards[1], "Player Two"),
    ];
    players.forEach((player, index) => {
      const boardIndex = (index + 1) % boards.length;
      player.enemyBoard = boards[boardIndex];
      player.attack = (attackPosition) => {
        return player.enemyBoard.receiveAttack(attackPosition);
      };
    });
    players[0].active = true;

    return players;
  };
  const players = init();

  const switchPlayerTurn = () => {
    players.forEach((player) => {
      player.active = player.active === true ? false : true;
    });
  };

  const getActivePlayer = () => {
    let activePlayer;
    players.forEach((player) => {
      if (player.active === true) {
        // console.log(player);
        activePlayer = player;
      }
    });
    return activePlayer;
  };

  const definedGame = () => {
    let ship, position, orientation;
    ship = new Ship(2);
    position = [0, 0];
    orientation = "horizontal";
    players[0].board.place(ship, position, orientation);

    ship = new Ship(3);
    position = [5, 3];
    orientation = "vertical";
    players[1].board.place(ship, position, orientation);
  };

  const playRound = (x, y) => {
    const result = getActivePlayer().attack([x, y]);
    return result;
  };

  const playComputerRound = () => {
    let attackPosition = generateRandomAttack();
    let result = getActivePlayer().attack(attackPosition);
    while (
      result === "alreadyHit" ||
      result === "hit" ||
      result === "sunk" ||
      result === true
    ) {
      attackPosition = generateRandomAttack();
      result = getActivePlayer().attack(attackPosition);
      console.log("debug");
    }
    return result;
  };

  const generateRandomAttack = () => {
    const x = Math.floor(Math.random() * 10),
      y = Math.floor(Math.random() * 10),
      attackPosition = [x, y];
    return attackPosition;
  };

  return {
    playRound,
    playComputerRound,
    getActivePlayer,
    switchPlayerTurn,
    definedGame,
    players,
  };
}
