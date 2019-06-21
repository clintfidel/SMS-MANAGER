'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Sms', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    sender: {
      type: Sequelize.STRING
    },
    receiver: {
      type: Sequelize.STRING
    },
    message: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Sms')
};
