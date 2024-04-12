const User = require("./user");
const SkateTrick = require("./skateTrick");
const UserSkateTricks = require("./userSkateTricks")

// Define associations
User.hasMany(UserSkateTricks, {
  foreignKey: "userId", // Name of the foreign key attribute in the Trick model
  onDelete: "CASCADE", // When a user is deleted, delete all associated tricks
});

UserSkateTricks.belongsTo(User, {
  foreignKey: "userId", // Name of the foreign key attribute in the Trick model
});
SkateTrick.hasMany(UserSkateTricks, {
  foreignKey: "skateTrickId", // Name of the foreign key attribute in the Trick model
  onDelete: "CASCADE", // When a user is deleted, delete all associated tricks
});

UserSkateTricks.belongsTo(SkateTrick, {
  foreignKey: "skateTrickId", // Name of the foreign key attribute in the Trick model
});

module.exports = { User, SkateTrick, UserSkateTricks };
