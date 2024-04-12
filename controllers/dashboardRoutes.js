//add from Reggie - route handler for handlebars
const router = require("express").Router();
const { UserSkateTricks, SkateTrick, User }= require("../models");

//logic to render tricks and trick count
router.get('/', async (req, res) => {
  try {

      if(!req.session.user_id) {
          return res.redirect('/login');
      }

      const userId = req.session.user_id;

      // console.log('userId', userId)

      //gets user skate tricks
      const userTricks = await UserSkateTricks.findAll({
          where: { userId },
          include: [SkateTrick, User]
      });
      
      const serializedTricks = userTricks.map(trick => trick.get({plain: true}))

      console.log("tricks test", serializedTricks);

      let userRank = 'Noob';
      if (serializedTricks[0]) {
        userRank = serializedTricks[0].user.rank;
      }
      // const userRank = serializedTricks[0].user.rank;
      // console.log("user rank", userRank);

      //counts number of learned tricks
      const learnedTricksCount = serializedTricks.filter(trick => trick.completed).length;
      // console.log('learnedTricksCount', learnedTricksCount)

      res.render('user'      , {
          serializedTricks,
          learnedTricksCount,
          userRank,
          logged_in: req.session.logged_in
      })
      console.log(req.session.logged_in);

  } catch (err) {
      console.error('error retrieving user tricks', err);
      res.status(500).send('internal server error');
  }
});
  
  //Reggie add -logic for dashboard.js checkbox logic
router.post('/', async (req, res) => {
    const { trickId, isChecked } = req.body;
    const userId = req.session.userId;
  
    try{
      await UserSkateTricks.update(
          { completed: isChecked },
          { where: { userId: userId, skateTrickId: trickId } }
      );
      res.status(200).send('Trick status successfully updated');
    } catch (err) {
      console.error('Error updating trick status', err);
      res.status(500).send('Error updating trick status');
    }
  });
  module.exports = router;

  
  //Reggie add - logic for dashbaord.js trick counter logic
  