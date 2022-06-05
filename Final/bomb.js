class Bomb extends LivingCreature {

  boom() {
    for (let j in this.directions) {
      var newX = this.directions[j][0];
      var newY = this.directions[j][1];
      if (
        newX >= 0 &&
        newX < matrix[0].length &&
        newY >= 0 &&
        newY < matrix.length
      ) {
        if (matrix[newY][newX] == 1) {
          matrix[newY][newX] = 4;
          for (var i in grassArr) {
            if (newX == grassArr[i].x && newY == grassArr[i].y) {
              grassArr.splice(i, 1);
              break;
            }
          }
        }
        if (matrix[newY][newX] == 2) {
          matrix[newY][newX] = 4;
          for (var i in grassEaterArr) {
            if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
              grassEaterArr.splice(i, 1);
              break;
            }
          }
        }
        if (matrix[newY][newX] == 3) {
            matrix[newY][newX] = 4;
            for (var i in PredatorArr) {
              if (newX == PredatorArr[i].x && newY == PredatorArr[i].y) {
                PredatorArr.splice(i, 1);
                break;
              }
            }
          }
          
        if(PredatorArr.length == grassEaterArr.length){
            matrix[newY][newX] = 0;
        }  
      }
    }
  }
}
