


module.exports = (sequelize, dataTypes) => {
    const alias = 'Hipico';
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
      siglas: {
        type: dataTypes.STRING(150),
        allowNull: false,
      },
      logo: {
        type: dataTypes.STRING(150),
        allowNull: false
      },
      direccion:{
        type: dataTypes.STRING(100)
      },
      mail:{
        type: dataTypes.STRING(100)
      },
      contrasena: {
        type: dataTypes.STRING(100)
      },
      integrator: {
        type: dataTypes.STRING(100)
      }, 
      token: {
        type: dataTypes.STRING(100)
      },
      pago_deuda: {
        type: dataTypes.INTEGER(10).UNSIGNED
    },
      pago_mes: {
        type: dataTypes.INTEGER(10).UNSIGNED
    },
      pago_com: {
        type: dataTypes.INTEGER(10).UNSIGNED
    },
      habilitado: {
        type: dataTypes.INTEGER(10).UNSIGNED
  }
    };
    const config = {
      tableName: 'hipicos',
      timestamps: true,
      underscored: true
    };
    const Hipico = sequelize.define(alias, cols, config);  
    
    Hipico.associate = function(models) {
      
      Hipico.belongsToMany(models.Deuda_hipico, {
        as: 'Deuda',
        through: 'hipicos_deudas',
        foreignKey: 'hipico_id',
        otherKey: 'deuda_id',
        timestamps: false
      });

      Hipico.hasMany(models.Concurso, {
        as: 'Concurso',
        foreignKey: 'hipico_id'
      });
      
      Hipico.hasMany(models.Ganancia, {
        as: 'Ganancia',
        foreignKey: 'hipico_id'
      });
    };
    
    return Hipico;
  }