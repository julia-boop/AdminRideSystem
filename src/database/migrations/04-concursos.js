'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable ('concursos', {
        id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          nombre: {
            type: Sequelize.DataTypes.STRING(150),
            allowNull: false,
          },
          fecha: {
            type: Sequelize.DataTypes.STRING(150),
            allowNull: false
          },
          anteprograma:{
            type: Sequelize.DataTypes.STRING(100),
            allowNull: true
          },
          total_rec:{
            type: Sequelize.DataTypes.INTEGER(10),
            allowNull: true
          },
          hipico_id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            allowNull:false,
            references: {
                model: 'hipicos',
                key: 'id'
            }          
          },
          pagado: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
          },
          estado: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
          },
          created_at: Sequelize.DataTypes.DATE,
          updated_at: Sequelize.DataTypes.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('concursos')
  }
};