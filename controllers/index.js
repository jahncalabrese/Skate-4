const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const dashBoardRoutes = require("./dashboardRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashBoardRoutes)

module.exports = router;
