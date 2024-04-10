const sequelize = require('../config/connection');
const { User, UserSkateTricks, SkateTrick } = require('../models');
const skatetricks = require("./skateTricks.json");
const userskatetricks = require("./userSkateTrick.json");
const user = require("./user.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(user, {individualHooks: true});
  await SkateTrick.bulkCreate(skatetricks);
  await UserSkateTricks.bulkCreate(userskatetricks);
  console.log("seeded data");
  process.exit(0);
};

seedAll();
