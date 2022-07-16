// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track) {
    // Тут всё рисуем.
    console.clear();
    console.log("           БАГА-БОРЕЦ");
    console.log('\n');
    console.log('=================================');
    console.log('\n');
    console.log(track.join(''));
    console.log('\n');
    console.log('=================================');
    console.log('\n');
    console.log(`Created by Depressiv_Games with love`);
  }
}

module.exports = View;
