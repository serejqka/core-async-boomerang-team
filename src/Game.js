// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().
const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const controlHero = require('./keyboard')
const { userName } = require('./DataBase')
const player = require('play-sound')(opts = {});
// const {
//   sequelize,
//   User
// } = require('../db/models');


// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({
    trackLength
  }) {
    this.trackLength = trackLength;
    this.hero = new Hero({
      position: 0,
      boomerang: new Boomerang()
    }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.score = 0;
    this.player = player;
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

  check(name) {
    if (this.enemy.position === this.hero.position + 1) {
      this.player.play('./src/sounds/hold-your-horses.wav');
      this.hero.die();
      this.regenerateTrack();
      this.view.render(this.track);
      userName(name, this.score)
    }
  }

  checkEnemy() {
    if (this.hero.boomerang.position >= this.enemy.position - 1) {
      this.hero.boomerang.hitEnemy = true;
      this.player.play('./src/sounds/congratulations.wav');
      this.enemy.die();
      this.score += 1;
      this.enemy = new Enemy();
    } else {
      this.enemy.moveLeft();
    }
  }

  play(name) {
    controlHero(this.hero)
    setInterval(() => {
      // Let's play!
      this.check(name);
      this.checkEnemy();
      this.regenerateTrack();
      this.view.render(this.track, name, this.score);
    }, 200);
  }
}

module.exports = Game;