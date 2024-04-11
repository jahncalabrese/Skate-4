const router = require("express").Router();
const { User } = require("../../models");

router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    let userData = await User.findOne({ where: { email: req.body.email } });
    console.log(userData);
    if (!userData) {
      console.log("create new user");
      userData = await User.create(req.body)
      
    }else{

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }}
    console.log(userData);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      // req.redirect("/dashboard");

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
