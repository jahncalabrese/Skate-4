const { DataTypes, Model } = require('sequelize');
const sequelize = require('./database'); // Assuming you have a separate file for Sequelize initialization

class UserSkateTricks extends Model {}

UserSkateTricks.init({
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

