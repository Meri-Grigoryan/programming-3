class Store {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.multiply = 0;
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1]
    ];
  }

  pluspr() {
    for (let i = 0; i < 2; i++) {
      let x = Math.floor(Math.random() * 30);
      let y = Math.floor(Math.random() * 30);
      if (matrix[y][x] == 0) {
        matrix[y][x] = 3;
        let pr = new Predator(x,y)
        PredatorArr.push(pr)
      }
    }
  }
  plusgreater() {
    for (let i = 0; i < 2; i++) {
      let x = Math.floor(Math.random() * 30);
      let y = Math.floor(Math.random() * 30);
      if (matrix[y][x] == 0) {
        matrix[y][x] = 2;
        let gre = new GrassEater(x,y)
        grassEaterArr.push(gre)
      }
    }
  }
  plusgr() {
    for (let i = 0; i < 2; i++) {
      let x = Math.floor(Math.random() * 30);
      let y = Math.floor(Math.random() * 30);
      if (matrix[y][x] == 0) {
        matrix[y][x] = 1;
        let gr = new Grass(x,y)
        grassArr.push(gr)
      }
    }
  }

}
