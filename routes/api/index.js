const router = require("express").Router();
const articleRoutes = require("./articles");
// NYT routes
router.use("/articles", articleRoutes);


module.exports = router;