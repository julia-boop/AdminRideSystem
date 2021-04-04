


module.exports = (sequelize, dataTypes) => {
    const alias = 'Prueba';
    const cols = {
      id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: dataTypes.STRING(150),
        allowNull: false,
      },
      altura: {
        type: dataTypes.STRING(150),
        allowNull: false
      },
      definicion:{
        type: dataTypes.STRING(100)
      },
      estado:{
        type: dataTypes.INTEGER(10).UNSIGNED
      },
      dia: {
        type: dataTypes.STRING(100)
      },
      hora: {
        type: dataTypes.STRING(100)
      }, 
      numero: {
          type: dataTypes.INTEGER(10).UNSIGNED
      },
      tipo: {
          type: dataTypes.STRING(100)
      },
      articulo: {
          type: dataTypes.STRING(100)
      },
      precio: {
        type: dataTypes.INTEGER(10)
      },
      anotados: {
          type: dataTypes.INTEGER(100).UNSIGNED
      },
      total_rec: {
          type: dataTypes.INTEGER(1000)
      },
      concurso_id: {
          type: dataTypes.INTEGER(10).UNSIGNED,
          allowNull: false
      }
    };
    const config = {
      tableName: 'pruebas',
      timestamps: true,
      underscored: true
    };
    const Prueba = sequelize.define(alias, cols, config);  
    
    Prueba.associate = function(models) {
      
      Prueba.belongsToMany(models.Usuario, {
        as: 'Usuario',
        through: 'usuarios_pruebas',
        foreignKey: 'prueba_id',
        otherKey: 'usuario_id',
        timestamps: false
      });
      
      Prueba.belongsToMany(models.Categoria, {
        as: 'Categoria',
        through: 'categorias_pruebas',
        foreignKey: 'prueba_id',
        otherKey: 'categoria_id',
        timestamps: false
      });

      Prueba.hasMany(models.Inscripcion, {
        as: 'Inscripcion',
        foreignKey: 'prueba_id'
      });

      Prueba.belongsTo(models.Concurso, {
        as: 'Concurso',
        foreignKey: 'concurso_id'
      });
  
    };
    
    return Prueba;
  }