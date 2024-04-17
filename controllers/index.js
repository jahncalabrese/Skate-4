const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const dashBoardRoutes = require("./dashboardRoutes");
const saveRoute = require("./api/save");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashBoardRoutes)
router.use("/save", saveRoute);


module.exports = router;
