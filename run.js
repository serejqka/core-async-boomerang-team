// Основной файл.
// Запускает игру.
const Game = require('./src/Game');
const { userName } = require('./src/DataBase')

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});


// Запуск игры.
function start(){
  const readline = require('readline');
  return new Promise((resolve, rejects) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(('Введите имя: '), (el) => {
      return resolve(el)
    })
  })
}

start()
  .then(name => {
    game.play(name);
    // userName(name);
  })

