import { Ship } from "../src/modules/ship";

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
