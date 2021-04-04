


module.exports = (sequelize, dataTypes) => {
    const alias = 'Concurso';
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
      fecha: {
        type: dataTypes.STRING(150),
        allowNull: false
      },
      anteprograma:{
        type: dataTypes.STRING(100),
        allowNull: true
      },
      total_rec:{
        type: dataTypes.INTEGER(10),
        allowNull: true
      },
      hipico_id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        allowNull:false
      },
      pagado: {
        type: dataTypes.INTEGER(10).UNSIGNED,
      },
      estado: {
        type: dataTypes.INTEGER(10).UNSIGNED,
      }
    };
    const config = {
      tableName: 'concursos',
      timestamps: true,
      underscored: true
    };
    const Concurso = sequelize.define(alias, cols, config);  
    
    Concurso.associate = function(models) {
      
      // Concurso.belongsTo(models.Deuda_hipico, {
      //   as: 'Deuda',
      //   foreignKey: 'concurso_id',
      // });

      Concurso.hasMany(models.Prueba, {
        as: 'Prueba',
        foreignKey: 'concurso_id'
      });

      Concurso.belongsTo(models.Hipico, {
          as: 'Hipico',
          foreignKey: 'hipico_id'
      })
    };
    
    return Concurso;
  }