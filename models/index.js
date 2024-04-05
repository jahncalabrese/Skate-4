const User = require('./users');
const Trick = require('./Trick');

// Define associations
User.hasMany(Trick, {
  foreignKey: 'userId', // Name of the foreign key attribute in the Trick model
  onDelete: 'CASCADE', // When a user is deleted, delete all associated tricks
});

Trick.belongsTo(User, {
  foreignKey: 'userId', // Name of the foreign key attribute in the Trick model
});

module.exports = { User, Trick };
