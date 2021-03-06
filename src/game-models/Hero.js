// Наш герой.

class Hero {
  constructor({ position, boomerang }) {
    this.skin = '🤓'; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = boomerang;
  }

  moveLeft() {
    // Идём влево.
    if(this.position !== 0){
    this.position -= 1;}
  }

  moveRight() {
    // Идём вправо.
    if(this.position <= 30){
    this.position += 1;}
  }

  attack() {
    // Атакуем.
    this.boomerang.position = this.position + 1
    const timerId = setInterval(() => {
      this.boomerang.fly();
      if (this.boomerang.position <= this.position) {
        clearInterval(timerId);
        this.boomerang.position = null;
        this.boomerang.hitEnemy = false;
      }
    }, 80);
  }

  die() {
    this.skin = '😫';
  }
}

module.exports = Hero;
