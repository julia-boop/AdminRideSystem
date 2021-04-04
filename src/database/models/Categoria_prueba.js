module.exports = (sequelize, dataTypes) => {
    const alias = 'Categoria_prueba';
    const cols = {
      id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      prueba_id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      categoria_id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        allowNull: false
      }
    };
    const config = {
      tableName: 'categorias_pruebas',
      timestamps: false,
      underscored: true
    };
    const Categoria_prueba = sequelize.define(alias, cols, config); 
    
    return Categoria_prueba;
  }