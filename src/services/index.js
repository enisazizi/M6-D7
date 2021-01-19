const router = require("express").Router()

const articleRouter = require("./articles")
const authorRouter = require("./authors")


router.use("/articles",articleRouter)
router.use("/authors",authorRouter)

module.exports = router