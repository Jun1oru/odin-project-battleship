import { Ship, Gameboard, Player } from "../src/index.js";

describe("Ship Class", () => {
  let ship;
  beforeEach(() => {
    ship = new Ship(3);
  });

  test("Hit function", () => {
    while (!ship.isSunk()) {
      ship.hit();
    }
    ship.hit();
    expect(ship.hitCounter).toBe(ship.length);
  });

  test("isSunk function", () => {
    expect(ship.isSunk()).toBeFalsy();
    while (!ship.isSunk()) {
      ship.hit();
    }
    expect(ship.isSunk()).toBeTruthy();
  });
});

describe("Gameboard", () => {
  describe("Place ship at position", () => {
    const tests = [
      {
        ship: new Ship(3),
        gameBoard: new Gameboard(),
        position: [0, 1],
        orientation: "horizontal",
      },
    ];

    test("Position is on board", () => {
      tests.forEach((input) => {
        expect(
          input.gameBoard.isPositionOnBoard(
            input.position,
            input.ship,
            input.orientation,
          ),
        ).toBeTruthy();
      });
    });

    test("Save position to board", () => {
      tests.forEach((input) => {
        let x = input.position[0],
          y = input.position[1];
        input.gameBoard.place(input.ship, input.position, input.orientation);
        expect(input.gameBoard.board[x][y]).toEqual(input.ship);
      });
    });
  });

  describe("receiveAttack function", () => {
    const tests = [
      {
        gameBoard: new Gameboard(),
        attackPosition: [1, 1],
        test: "onBoard",
      },
      {
        ship: new Ship(3),
        gameBoard: new Gameboard(),
        position: [0, 1],
        orientation: "horizontal",
        attackPosition: [1, 1],
        test: "miss",
      },
      {
        ship: new Ship(3),
        gameBoard: new Gameboard(),
        position: [0, 1],
        orientation: "horizontal",
        attackPosition: [0, 1],
        test: "hit",
      },
      {
        ship: new Ship(3),
        gameBoard: new Gameboard(),
        position: [0, 1],
        orientation: "horizontal",
        attackPosition: [0, 1],
        test: "alreadyHit",
      },
    ];

    tests.forEach((input) => {
      if (input.test === "onBoard") {
        test("Attack is on board", () => {
          expect(
            input.gameBoard.receiveAttack(input.attackPosition),
          ).toBeTruthy();
        });
      } else if (input.test === "miss") {
        test("Attack miss case", () => {
          input.gameBoard.place(input.ship, input.position, input.orientation);
          expect(input.gameBoard.receiveAttack(input.attackPosition)).toBe(
            "miss",
          );
        });
      } else if (input.test === "hit") {
        test("Attack hit case", () => {
          input.gameBoard.place(input.ship, input.position, input.orientation);
          expect(input.gameBoard.receiveAttack(input.attackPosition)).toBe(
            "hit",
          );
        });
      } else if (input.test === "alreadyHit") {
        test("Already hit case", () => {
          input.gameBoard.place(input.ship, input.position, input.orientation);
          input.gameBoard.receiveAttack(input.attackPosition);
          expect(input.gameBoard.receiveAttack(input.attackPosition)).toBe(
            "alreadyHit",
          );
        });
      }
    });
  });

  test("All ships sunk", () => {
    const tests = [
      {
        ship: new Ship(3),
        gameBoard: new Gameboard(),
        position: [0, 1],
        orientation: "horizontal",
        attackPosition: [0, 1],
        test: "hit",
      },
    ];

    tests.forEach((input) => {
      input.gameBoard.place(input.ship, input.position, input.orientation);

      input.ship = new Ship(4);
      input.position = [5, 4];
      input.orientation = "horizontal";
      input.gameBoard.place(input.ship, input.position, input.orientation);

      input.gameBoard.receiveAttack(input.attackPosition);

      input.attackPosition = [0, 2];
      input.gameBoard.receiveAttack(input.attackPosition);

      input.attackPosition = [0, 3];
      input.gameBoard.receiveAttack(input.attackPosition);

      input.gameBoard.receiveAttack([5, 4]);
      input.gameBoard.receiveAttack([5, 5]);
      input.gameBoard.receiveAttack([5, 6]);
      input.gameBoard.receiveAttack([5, 7]);

      expect(input.gameBoard.allShipsSunk()).toBeTruthy();
    });
  });
});

describe("Player", () => {
  const tests = [
    {
      playerOne: new Player("real", new Gameboard()),
      playerTwo: new Player("real", new Gameboard()),
    },
  ];

  test("Own gameboard", () => {
    expect(tests[0].playerOne.board).not.toBe(tests[0].playerTwo.board);
  });
});
