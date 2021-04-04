module.exports = (sequelize, dataTypes) => {
    const alias = 'Categoria';
    const cols = {
      id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: dataTypes.STRING(150),
        allowNull: false,
      }
    };
    const config = {
      tableName: 'categorias',
      timestamps: false,
      underscored: true
    };
    const Categoria = sequelize.define(alias, cols, config); 

    Categoria.associate = function(models){

        Categoria.belongsToMany(models.Prueba, {
            as: 'Categoria',
            through: 'categorias_pruebas',
            foreignKey: 'categoria_id',
            otherKey: 'prueba_id',
            timestamps: false
          });
          
    }
    
    return Categoria;
  }