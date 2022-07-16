// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track) {
    // Тут всё рисуем.
    console.clear();
    console.log('           БАГА-БОРЕЦ\n\n\n=================================\n\n' + track.join('') + '\n\n=================================\n\nCreated by Depressiv_Games with love');
  }
}

module.exports = View;
