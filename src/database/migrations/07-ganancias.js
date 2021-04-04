'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable ('ganancias', {
        id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          hipico_id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: {
                model: 'hipicos',
                key: 'id'
            }
          },
          total: {
            type: Sequelize.DataTypes.INTEGER(10),
            allowNull: false
          },
          created_at: Sequelize.DataTypes.DATE,
          updated_at: Sequelize.DataTypes.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ganancias')
  }
};