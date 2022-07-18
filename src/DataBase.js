const { sequelize, User } = require('../db/models');

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

async function allUsers() {
  const [results] = await sequelize.query(
    `SELECT "id", "username", "highScore" FROM "Users" ORDER BY username`
  )
  return results;
}

async function stats() {
  const [results] = await sequelize.query(
    `SELECT "id", "username", "highScore" FROM "Users" ORDER BY username`
  )
  const score = results.sort((a,b) => b.highScore - a.highScore)
  console.log('\x1b[33m%s\x1b[0m', `№ username            score`)
  console.log('\x1b[35m%s\x1b[0m', score.slice(0,5).map((el, i) => [`${i + 1} ${el.username} устранил(-а) - ${el.highScore} багов`]).join('\n'))
  return process.exit()
}

async function userName(username, highScore) {
  const allusers = await allUsers();
  const score = allusers.sort((a,b) => b.highScore - a.highScore)
  const name = allusers.find((obj) => {
    if (obj.username === username) {
      if (obj.username === username && obj.highScore < highScore){
        return obj
      } else {
        return process.exit()
      }
    }
  })

  if(name){
    updateUser(username, highScore)
  } else {
    createUser(username, highScore)
  }
}

async function createUser(username, highScore) {
  try {
    await User.create({
      username,
      highScore,
    })
  } catch (error) {
    console.log('Не получилось создать запись в таблице User');
    console.log((error.message));
  }
  console.log('\x1b[33m%s\x1b[0m', `ТЫ ПРОПУСТИЛ БАГ!`);
  process.exit()
}


async function updateUser(username, highScore) {
  try {
    await User.update({
      highScore,
    }, {
      where: {
        username,
      }
    })
  } catch (error) {
    console.log('Не получилось создать запись в таблице User');
    console.log((error.message));
  }
  console.log('\x1b[33m%s\x1b[0m', `ТЫ ПРОПУСТИЛ БАГ!`);
  process.exit()
}

// userName('Sergey', 100)

module.exports = {
  userName,
  stats
};
