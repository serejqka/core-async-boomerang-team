module.exports = {
  async up(queryInterface) {
    const usersName = ['Elijah', 'Emma'];

    const users = usersName.map((name, i) => ({
      username: name,
      highScore: i,
      createdAt: new Date(),
      updatedAt: new Date(),
    }))

    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users')
  }
};