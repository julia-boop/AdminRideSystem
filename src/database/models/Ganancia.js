module.exports = (sequelize, dataTypes) => {
    const alias = 'Ganancia';
    const cols = {
      id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      hipico_id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      concurso_id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        allowNull: false
      }
    };
    const config = {
      tableName: 'Ganancia',
      timestamps: true,
      underscored: true
    };
    const Ganancia = sequelize.define(alias, cols, config); 
    
    Ganancia.associate = function(models){
        Ganancia.belongsTo(models.Hipico, {
            as: 'Ganancia',
            foreignKey: 'hipico_id'
        })
    }
    
    return Ganancia;
  }