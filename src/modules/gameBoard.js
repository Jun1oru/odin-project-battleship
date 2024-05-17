import { Ship } from "./ship";

export class Gameboard {
  constructor() {
    this.boardSize = 10;
    this.board = this.createGameBoard();
  }

  createGameBoard() {
    const array = [];
    for (let i = 0; i < this.boardSize; i++) {
      const row = [];
      for (let j = 0; j < this.boardSize; j++) row.push(0);
      array.push(row);
    }
    return array;
  }

  isPositionOnBoard(position, ship = null, orientation = null) {
    let horizontalValid = false,
      verticalValid = false,
      x = position[0],
      y = position[1];
    if (ship === null) {
      if (x >= 0 && x <= 9) horizontalValid = true;
      if (y >= 0 && y <= 9) verticalValid = true;
    } else {
      if (orientation === "horizontal") {
        if (x >= 0 && x <= 9) horizontalValid = true;
        if (y >= 0 && y + ship.length - 1 <= 9) verticalValid = true;
      } else if (orientation === "vertical") {
        if (x >= 0 && x + ship.length - 1 <= 9) horizontalValid = true;
        if (y >= 0 && y <= 9) verticalValid = true;
      }
    }

    return horizontalValid && verticalValid;
  }

  place(ship, position, orientation) {
    let x = position[0],
      y = position[1];
    if (this.isPositionOnBoard(position, ship, orientation)) {
      if (orientation === "horizontal") {
        for (let i = 0; i < this.boardSize; i++) {
          if (i >= y && i <= y + ship.length - 1) {
            if (this.board[x][i] instanceof Ship) return "try again";
            this.board[x][i] = ship;
          }
        }
        ship.position = position;
        ship.orientation = orientation;
        return true;
      } else if (orientation === "vertical") {
        for (let i = 0; i < this.boardSize; i++) {
          if (i >= x && i <= x + ship.length - 1) {
            if (this.board[i][y] instanceof Ship) return "try again";
            this.board[i][y] = ship;
          }
        }
        ship.position = position;
        ship.orientation = orientation;
        return true;
      }
    }
    return false;
  }

  receiveAttack(attackPosition) {
    if (this.isPositionOnBoard(attackPosition)) {
      let x = attackPosition[0],
        y = attackPosition[1];

      if (this.board[x][y] === 0) {
        this.board[x][y] = "miss";
        return "miss";
      } else if (this.board[x][y] instanceof Ship) {
        if (this.board[x][y].hitPositions.includes(attackPosition)) {
          return "alreadyHit";
        } else {
          this.board[x][y].hit(attackPosition);
          return "hit";
        }
      }
      return true;
    }
    return false;
  }

  allShipsSunk() {
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize; j++) {
        if (this.board[i][j] instanceof Ship && !this.board[i][j].isSunk())
          return false;
      }
    }
    return true;
  }
}
