'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable ('hipicos', {
        id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          nombre: {
            type: Sequelize.DataTypes.STRING(150),
            allowNull: false,
          },
          siglas: {
            type: Sequelize.DataTypes.STRING(150),
            allowNull: false,
          },
          logo: {
            type: Sequelize.DataTypes.STRING(150),
            allowNull: false
          },
          direccion:{
            type: Sequelize.DataTypes.STRING(100)
          },
          mail:{
            type: Sequelize.DataTypes.STRING(100)
          },
          contrasena: {
            type: Sequelize.DataTypes.STRING(100)
          },
          integrator: {
            type: Sequelize.DataTypes.STRING(100)
          }, 
          token: {
            type: Sequelize.DataTypes.STRING(100)
          },
          pago_deuda: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED
        },
          pago_mes: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED
        },
          pago_com: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED
        },
          habilitado: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED
        },
        created_at: Sequelize.DataTypes.DATE,
        updated_at: Sequelize.DataTypes.DATE

    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hipicos')
  }
};