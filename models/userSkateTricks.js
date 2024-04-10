const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection'); // Assuming you have a separate file for Sequelize initialization

class UserSkateTricks extends Model {}

UserSkateTricks.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    skateTrickId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: 'UserSkateTricks'
});

module.exports = UserSkateTricks;

