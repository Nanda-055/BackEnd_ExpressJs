const router = require('express').Router()

const carRouter = require('./car')
const flowersRouter = require('./flowers')

router.use(carRouter)
router.use(flowersRouter)

module.exports = router