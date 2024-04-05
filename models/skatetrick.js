const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SkateTrick extends Model {}

SkateTrick.init(
  {  
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
   
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
  }  
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'skate',
  }
);

module.exports = SkateTrick;


