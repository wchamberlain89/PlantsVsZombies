import {Sunflower} from "./sunflower.js"
import {Zombie} from "./zombie.js"

export class Game {
  constructor() {
    this.sunQty = 100;
    this.playerHp = 3;
    this.board = {
      space1 : 0,
      space2 : 0,
      space3 : 0,
      space4 : 0,
      space5 : 0,
      space6 : 0,
      space7 : 0
    }
    this.activeZombies = [];
  }

  addToBoard(index) {

  }

  addSunflower(space) {
    const sunflower = new Sunflower();
    this.board[space] = sunflower
    this.sunQty -= sunflower.cost;
    sunflower.ability(this);
  }

  spawn() {
    const zombie = new Zombie();
    this.board.space7 = zombie;
  }
}
