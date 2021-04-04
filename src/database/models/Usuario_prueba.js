module.exports = (sequelize, dataTypes) => {
    const alias = 'Usuario_prueba';
    const cols = {
      id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      usuario_id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      prueba_id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        allowNull: false
      }
    };
    const config = {
      tableName: 'usuarios_pruebas',
      timestamps: true,
      underscored: true
    };
    const Usuario_prueba = sequelize.define(alias, cols, config);  
    
    return Usuario_prueba;
  }