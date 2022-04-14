const router = require('express').Router()

const flowerControllers = require('../controllers/flowerController')

router.get('/flowers',flowerControllers.get)
router.post('/flowers',flowerControllers.create)
router.get('/flowers/:id', flowerControllers.getDataById)
router.put('/flowers/:id', flowerControllers.update)
router.delete('/flowers/:id', flowerControllers.delete)


module.exports = router