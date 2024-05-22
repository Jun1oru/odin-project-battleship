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

  isAdjacentShip(position, orientation, length) {
    const adjacentTop = (x, y) => {
      if (x > 0) {
        if (this.board[x - 1][y] instanceof Ship) return true;
        else if (y > 0 && this.board[x - 1][y - 1] instanceof Ship) return true;
        else if (
          y < this.boardSize - 1 &&
          this.board[x - 1][y + 1] instanceof Ship
        )
          return true;
      }
      return false;
    };

    const adjacentRight = (x, y) => {
      if (y < this.boardSize - 1) {
        if (this.board[x][y + 1] instanceof Ship) return true;
        else if (x > 0 && this.board[x - 1][y + 1] instanceof Ship) return true;
        else if (
          x < this.boardSize - 1 &&
          this.board[x + 1][y + 1] instanceof Ship
        )
          return true;
      }
      return false;
    };

    const adjacentBottom = (x, y) => {
      if (x < this.boardSize - 1) {
        if (this.board[x + 1][y] instanceof Ship) return true;
        else if (
          y < this.boardSize - 1 &&
          this.board[x + 1][y + 1] instanceof Ship
        )
          return true;
        else if (y > 0 && this.board[x + 1][y - 1] instanceof Ship) return true;
      }
      return false;
    };

    const adjacentLeft = (x, y) => {
      if (y > 0) {
        if (this.board[x][y - 1] instanceof Ship) return true;
        else if (x > 0 && this.board[x - 1][y - 1] instanceof Ship) return true;
        else if (
          x < this.boardSize - 1 &&
          this.board[x + 1][y - 1] instanceof Ship
        )
          return true;
      }
      return false;
    };

    const startX = position[0],
      startY = position[1];

    let result = false;

    if (orientation === "horizontal") {
      for (let i = startY; i <= startY + length - 1; i++) {
        if (adjacentTop(startX, i) === true) {
          result = true;
          break;
        } else if (adjacentRight(startX, i) === true) {
          result = true;
          break;
        } else if (adjacentBottom(startX, i) === true) {
          result = true;
          break;
        } else if (adjacentLeft(startX, i) === true) {
          result = true;
          break;
        }
      }
      return result;
    } else if (orientation === "vertical") {
      for (let i = startX; i <= startX + length - 1; i++) {
        if (adjacentTop(i, startY) === true) {
          result = true;
          break;
        } else if (adjacentRight(i, startY) === true) {
          result = true;
          break;
        } else if (adjacentBottom(i, startY) === true) {
          result = true;
          break;
        } else if (adjacentLeft(i, startY) === true) {
          result = true;
          break;
        }
      }
      return result;
    }
    return result;
  }

  canPlaceShip(ship, startX, startY, orientation) {
    if (orientation === "vertical") {
      if (startX + ship.length > this.boardSize) return false;

      for (let i = 0; i < ship.length; i++) {
        if (this.board[startX + i][startY] instanceof Ship) return false;
        if (
          this.isAdjacentShip([startX, startY], orientation, ship.length) ===
          true
        )
          return false;
      }
    } else {
      if (startY + ship.length > this.boardSize) return false;

      for (let i = 0; i < ship.length; i++) {
        if (this.board[startX][startY + i] instanceof Ship) return false;
        if (
          this.isAdjacentShip([startX, startY], orientation, ship.length) ===
          true
        )
          return false;
      }
    }
    return true;
  }

  place(ship, position, orientation) {
    let x = position[0],
      y = position[1];
    if (this.isPositionOnBoard(position, ship, orientation) === false)
      return false;
    if (this.canPlaceShip(ship, x, y, orientation) === true) {
      for (let i = 0; i < ship.length; i++) {
        if (orientation === "horizontal") this.board[x][y + i] = ship;
        else this.board[x + i][y] = ship;
      }
      ship.position = position;
      ship.orientation = orientation;
      return true;
    } else {
      return "try again";
    }
  }

  receiveAttack(attackPosition) {
    if (this.isPositionOnBoard(attackPosition)) {
      let x = attackPosition[0],
        y = attackPosition[1];

      if (this.board[x][y] === 0) {
        this.board[x][y] = "miss";
        return "miss";
      } else if (this.board[x][y] instanceof Ship) {
        if (this.board[x][y].isSunk() === true) return "sunk";
        else if (
          this.board[x][y].hitPositions.some((position) =>
            position.every((value, index) => value === attackPosition[index]),
          )
        ) {
          return "alreadyHit";
        } else {
          this.board[x][y].hit(attackPosition);
          if (this.allShipsSunk() === true) return "over";
          return "hit";
        }
      }
      return true;
    }
    return false;
  }

  allShipsSunk() {
    let result = true;
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize; j++) {
        if (
          this.board[i][j] instanceof Ship &&
          this.board[i][j].isSunk() === false
        )
          result = false;
      }
    }
    console.log(result);
    return result;
  }
}
