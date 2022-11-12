const express = require('express')
const cajonsController = require('../../controllers/cajonsController')

const router = express.Router();

router.post('/postCajons', cajonsController.postCajons)
    .get('/getCajons', cajonsController.getCajons)
    .get('/getCajonsByCajon/:cajon', cajonsController.getCajonsByCajon)


module.exports = router;