// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.generateSkin();
    this.position;
    this.hitEnemy = false;
  }

  generateSkin() {
    const skins = ['⌨️', '🖱️', '💽', '💾', '💿', '🖨️', '🖥️', '💻', '🔌'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  fly() {
    if (!this.hitEnemy) {
      this.moveRight();
    } else {
      this.moveLeft();
    }
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
