const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");
//user logs in, and is shown the userSkateTricks to be completed
//shown rank, and trick meter
router.get("/", async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.redirect("/login");
    } else {
      res.redirect("/dashboard");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;

// router.post("/register", async (req, res) => {
//   try {
//     // Extract email from request body
//     const { email } = req.body;

//     // Create a new user with the provided email
//     const newUser = await User.create({ email });

//     // You can also do additional processing here if needed

//     res.status(200).json({ message: "User registered successfully" });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
