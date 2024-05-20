export class Player {
  constructor(type, board, name) {
    this.type = type;
    this.board = board;
    this.enemyBoard;
    this.name = name;
    this.active = false;
    this.attack;
    this.container;
  }

  receiveAttack(attackPosition) {
    this.board.receiveAttack(attackPosition);
  }
}
