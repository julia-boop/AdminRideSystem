module.exports = (sequelize, dataTypes) => {
    const alias = 'Inscripcion';
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
        allowNull: false,
    },
    categoria_id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
    },
    caballo: {
          type: dataTypes.STRING(150),
          allowNull: false
    },
    nombre: {
        type: dataTypes.STRING(150),
        allowNull: false
    },
    apellido: {
        type: dataTypes.STRING(150),
        allowNull: false
    },
    pais: {
        type: dataTypes.STRING(150),
        allowNull: false
    },
    club: {
        type: dataTypes.STRING(150),
        allowNull: false
    },
    estado: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
    }
    
    };
    const config = {
      tableName: 'inscripciones',
      timestamps: true,
      underscored: true
    };
    const Inscripcion = sequelize.define(alias, cols, config); 

    Inscripcion.associate = function(models){

        Inscripcion.belongsTo(models.Usuario, {
            as: 'Usuario',
            foreignKey: 'usuario_id'
        })

        Inscripcion.belongsTo(models.Prueba, {
            as: 'Prueba',
            foreignKey: 'prueba_id'
        })
          
        Inscripcion.belongsTo(models.Categoria, {
            as: 'Categoria',
            foreignKey: 'categoria_id'
        })
        
    }
    
    return Inscripcion;
  }