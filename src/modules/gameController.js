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

  const playComputerRound = (state) => {
    let result = true;
    const computer = getActivePlayer();
    const boardSize = computer.board.boardSize;
    const { previousMoves, targets, hits, initialHit, orientation } = state;

    const directions = {
      horizontal: [
        [0, -1],
        [0, 1],
      ],
      vertical: [
        [-1, 0],
        [1, 0],
      ],
      all: [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ],
    };

    const getRandomCoordinates = () => {
      let x, y;
      do {
        x = Math.floor(Math.random() * boardSize);
        y = Math.floor(Math.random() * boardSize);
      } while (previousMoves.has(`${x}-${y}`));
      return [x, y];
    };

    const getAdjacentCoordinates = (x, y, direction) => {
      return directions[direction]
        .map(([dx, dy]) => [x + dx, y + dy])
        .filter(
          ([nx, ny]) =>
            nx >= 0 &&
            ny >= 0 &&
            nx < boardSize &&
            ny < boardSize &&
            !previousMoves.has(`${nx}-${ny}`),
        );
    };

    while (
      result === "alreadyHit" ||
      result === "hit" ||
      result === "sunk" ||
      result === true
    ) {
      let x, y;
      if (targets.length > 0) {
        [x, y] = targets.shift();
      } else if (hits.length > 0) {
        const initial = initialHit || hits[0];
        let direction = "all";

        if (orientation) {
          direction = orientation;
        } else if (hits.length > 1) {
          const firstHit = hits[0];
          const secondHit = hits[1];
          if (firstHit.x === secondHit.x) {
            state.orientation = "vertical";
          } else if (firstHit.y === secondHit.y) {
            state.orientation = "horizontal";
          }
          state.initialHit = firstHit;
          direction = state.orientation || "all";
        }

        const adjCoordinates = getAdjacentCoordinates(
          initial.x,
          initial.y,
          direction,
        );

        if (adjCoordinates.length > 0) {
          [x, y] = adjCoordinates.shift();
          targets.push(...adjCoordinates);
        } else {
          [x, y] = getRandomCoordinates();
        }
      } else {
        [x, y] = getRandomCoordinates();
      }

      previousMoves.add(`${x}-${y}`);
      result = playRound(x, y);

      if (result === "hit") {
        hits.push({ x, y });
        const newTargets = getAdjacentCoordinates(
          x,
          y,
          state.orientation || "all",
        );
        targets.push(...newTargets);
      } else if (result === "sunk") {
        hits.length = 0;
        targets.length = 0;
        state.orientation = null;
        state.initialHit = null;
      }

      if (result === "over") return result;
    }
    return result;
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
