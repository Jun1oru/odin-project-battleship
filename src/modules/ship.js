export class Ship {
  constructor(length) {
    this.length = length;
    this.hitCounter = 0;
    this.hitPositions = [];
    this.sunk = false;
    this.position;
    this.orientation;
  }

  hit(attackPosition) {
    if (this.hitCounter === this.length) return;
    this.hitCounter++;
    this.hitPositions.push(attackPosition);
  }

  isSunk() {
    this.sunk = this.length === this.hitCounter ? true : false;
    return this.sunk;
  }
}
