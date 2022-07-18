// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track, name, bag) {
    // Тут всё рисуем.
    console.clear();
    console.log(`       ${name}-БОРЕЦ С БАГАМИ\n\n=================================\n\n` + track.join('') + '\n\n=================================\n\nCreated by Depressive_Games with love');
    console.log('\x1b[33m%s\x1b[0m', `ТЫ УСТРАНИЛ(-A) ${bag} БАГ(-A)(-ОВ)`);
  }
}

module.exports = View;
