'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable ('usuarios_pruebas', {
        id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          usuario_id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: {
                model:'usuarios',
                key:'id'
            }
          },
          prueba_id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: {
                model:'pruebas',
                key:'id'
            }
          },
          created_at: Sequelize.DataTypes.DATE,
          updated_at: Sequelize.DataTypes.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios_pruebas')
  }
};