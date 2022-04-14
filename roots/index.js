const router = require('express').Router()

const carRouter = require('./car')
const flowersRouter = require('./flowers')
const userRouter = require('./user')
const {authenticate} = require('../middlewares/auth')

router.use(carRouter)
router.use(flowersRouter)
router.use(userRouter)

router.use(authenticate)

module.exports = router