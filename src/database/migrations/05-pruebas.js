'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable ('pruebas', {
        id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          nombre: {
            type: Sequelize.DataTypes.STRING(150),
            allowNull: false,
          },
          altura: {
            type: Sequelize.DataTypes.STRING(150),
            allowNull: false
          },
          definicion:{
            type: Sequelize.DataTypes.STRING(100)
          },
          estado:{
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED
          },
          dia: {
            type: Sequelize.DataTypes.STRING(100)
          },
          hora: {
            type: Sequelize.DataTypes.STRING(100)
          }, 
          numero: {
              type: Sequelize.DataTypes.INTEGER(10).UNSIGNED
          },
          tipo: {
              type: Sequelize.DataTypes.STRING(100)
          },
          articulo: {
              type: Sequelize.DataTypes.STRING(100)
          },
          precio: {
            type: Sequelize.DataTypes.INTEGER(10)
          },
          anotados: {
              type: Sequelize.DataTypes.INTEGER(100).UNSIGNED
          },
          total_rec: {
              type: Sequelize.DataTypes.INTEGER(100)
          },
          concurso_id: {
              type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
              allowNull: false,
              references: {
                  model:'concursos',
                  key: 'id'
              }
          },
          created_at: Sequelize.DataTypes.DATE,
          updated_at: Sequelize.DataTypes.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pruebas')
  }
};