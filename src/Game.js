// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().
const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const controlHero = require('./keyboard')

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero({position: 0, boomerang: new Boomerang()}); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
  }

  checkEnemy() {
    if (this.hero.boomerang.position >= this.enemy.position - 2) {
      this.hero.boomerang.hitEnemy = true;
      this.enemy.die();
    } else {
      this.enemy.moveLeft();
    }
  }

  play() {
    controlHero(this.hero)
    setInterval(() => {
      // Let's play!
      this.check();
      this.checkEnemy();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 200);
  }
}

module.exports = Game;
