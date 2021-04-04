module.exports = (sequelize, dataTypes) => {
    const alias = 'Usuario';
    const cols = {
      id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      rol:{
        type: dataTypes.INTEGER(10).UNSIGNED,
        allowNull:false
      },
      email: {
        type: dataTypes.STRING(150),
        allowNull: false,
        unique: true
      },
      contrasena: {
        type: dataTypes.STRING(150),
        allowNull: false
      },
      nombre:{
        type: dataTypes.STRING(100)
      },
      apellido:{
        type: dataTypes.STRING(100)
      },
      telefono: {
        type: dataTypes.STRING(100)
      },
      pais: {
        type: dataTypes.STRING(100)
      }
    };
    const config = {
      tableName: 'usuarios',
      timestamps: true,
      underscored: true
    };
    const Usuario = sequelize.define(alias, cols, config);  
    
    Usuario.associate = function(models) {
      
      Usuario.belongsToMany(models.Prueba, {
        as: 'Prueba',
        through: 'usuarios_pruebas',
        foreignKey: 'usuario_id',
        otherKey: 'prueba_id',
        timestamps: true
      });
  
      Usuario.hasMany(models.Inscripcion, {
        as: 'Inscripcion',
        foreignKey: 'usuario_id'
      });
  
    };
    
    return Usuario;
  }

  