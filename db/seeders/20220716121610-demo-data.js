module.exports = {
  async up(queryInterface) {
    const usersName = ['Elijah', 'Emma'];

    const users = usersName.map((name) => ({
      username: name,
      score: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }))

    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users')
  }
};