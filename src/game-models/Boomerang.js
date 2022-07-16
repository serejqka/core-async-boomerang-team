// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position;
  }

  fly(heroPos) {
    this.position = heroPos + 1;
    const timerId = setInterval(() => {
      if (this.position !== 29){
        this.moveRight();
      } else {
        clearInterval(timerId);
        const secondTimerId = setInterval(() => {
          if (this.position !== heroPos + 1){
            this.moveLeft();
          } else {
            clearInterval(secondTimerId);
            this.position = null;
          }
        }, 100);
      }
    }, 100);
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
