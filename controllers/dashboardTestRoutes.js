//add from Reggie - route handler for handlebars
app.get('/dashboard', async (req, res) => {
    try {
      if (!res.session.userId) {
        return res.redirect('login');
      }
  
      const userID = req.session.user.id;
  
      const userTricks = await userSkateTricks.findAll({
        where: { userID },
        include: skatetrick,
      });
    
    //add from Reggie - count number of landed tricks
    const learnedTricksCount = userTricks.filter(trick => trick.completed).length;
    
    //add from Reggie - should render handlebars template
    res.render('user', {
      userTricks,
      learnedTricksCount,
    });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });
  
  //Reggie add -logic for dashboard.js checkbox logic
  app.post('/dashboard', (req, res) => {
    const { trickId, isChecked } = req.body;
    const userId = req.session.userId;
  
    userSkateTricks.update(
      { completed: isChecked },
      { where: {userId: userId, skateTrickId: trickId }}
    ).then(() => {
      res.status(200).send('Trick status succesfully updated');
    }).catch(err => {
      console.error('Error updating trick status', err);
      res.status(500).send('Error updating trick status');
    });
  });
  
  //Reggie add - logic for dashbaord.js trick counter logic
  app.get('/dashboard', async (req, res) => {
    try {
      if (!req.session.userId){
        return res.status(401).json({ error: 'Unauthorized'});
      }
  
      const userId = req.session.userId;
  
      const userTricks = await userSkateTricks.findAll({
        where: { userId },
        include: skatetrick,
      });
  
      const numberOfTricksLearned = await userSkateTricks.count({
        where: { userId: userId, completed: true}
      });
  
      res.render('dashboard', { //POSSIBLY HAVE THE WRONG HANDLEBAR NAME HERE. THINKING WE CAN CHANGE TO DASHBOARD INSTEAD OF MAIN BUT UP TO TEAM
        userTricks,
        learnedTricksCount: numberOfTricksLearned,
      });
  
    } catch (error){
      console.error('Error retrieving number of tricks learned', error);
      res.status(500).json({ error: 'internal server error' });
    }
  })
  
