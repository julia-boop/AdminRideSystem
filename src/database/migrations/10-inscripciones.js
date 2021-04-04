'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable ('inscripciones', {
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
        categoria_id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: {
                model:'categorias',
                key:'id'
            }
        },
        caballo: {
              type: Sequelize.DataTypes.STRING(150),
              allowNull: false
        },
        nombre: {
            type: Sequelize.DataTypes.STRING(150),
            allowNull: false
        },
        apellido: {
            type: Sequelize.DataTypes.STRING(150),
            allowNull: false
        },
        pais: {
            type: Sequelize.DataTypes.STRING(150),
            allowNull: false
        },
        club: {
            type: Sequelize.DataTypes.STRING(150),
            allowNull: false
        },
        estado: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
        created_at: Sequelize.DataTypes.DATE,
        updated_at: Sequelize.DataTypes.DATE
        
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('inscripciones')
  }
};