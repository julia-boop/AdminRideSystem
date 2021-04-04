'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable ('categorias_pruebas', {
        id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          prueba_id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: {
                model: 'pruebas',
                key: 'id'
            }
          },
          categoria_id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: {
                model: 'categorias',
                key: 'id'
            }
          }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('categorias_pruebas')
  }
};