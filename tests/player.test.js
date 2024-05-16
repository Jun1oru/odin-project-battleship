import { Player } from "../src/modules/player";
import { Gameboard } from "../src/modules/gameBoard";

describe.only("Player", () => {
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
