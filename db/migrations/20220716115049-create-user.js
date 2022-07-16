'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const attributes = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: { allowNull: false, type: Sequelize.TEXT },
      score: { allowNull: false, type: Sequelize.INTEGER },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    }
    await queryInterface.createTable('Users', attributes);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};