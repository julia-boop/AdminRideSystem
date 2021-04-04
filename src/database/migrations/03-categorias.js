'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable ('categorias', {
        id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          nombre: {
            type: Sequelize.DataTypes.STRING(150),
            allowNull: false,
          }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('categorias')
  }
};