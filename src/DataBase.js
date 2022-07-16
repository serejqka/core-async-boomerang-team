const {
    sequelize,
    User
} = require('../db/models');

// async function testConnection(){
//     try {
//         await sequelize.authenticate();
//         console.log('Всё гуд!');
//     } catch (error) {
//         console.log('...ooops');
//         console.log(error.message);
//     }
// }

// testConnection()

async function userName(name, bag) {
    const arr = [name, bag];
    try {
      await User.create({
        username: arr[0].toString(),
        score: Number(arr[1]),
      })
    } catch (error) {
      console.log('Не получилось создать запись в таблице User');
      console.log((error.message));
    }
    console.log('\x1b[33m%s\x1b[0m', `ТЫ СЛОВИЛ БАГ!\n${name} ТЫ УСТРАНИЛ ${bag} БАГ(-A)(-ОВ)`);
    process.exit()
}

module.exports = {
    userName
};