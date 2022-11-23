const express = require('express')
const intercambiosController = require('../../controllers/intercambiosController');


const router = express.Router();

router.post('/postIntercambio', intercambiosController.postIntercambio)
    .get('/getIntercambio/:folio', intercambiosController.getIntercambio)
    .get('/getIntercambios', intercambiosController.getIntercambios)
    .put('/updateIntercambio/:folio', intercambiosController.updateIntercambio)
    .get('/getIntercambiosByFolio/:folio', intercambiosController.getIntercambiosByFolio)
    .get('/getIntercambiosByFecha/:fecha', intercambiosController.getIntercambiosByFecha)
    .get('/getIntercambiosByTrailer/:trailer', intercambiosController.getIntercambiosByTrailer)
    .get('/getIntercambiosByUnidad/:unidad', intercambiosController.getIntercambiosByUnidad)

module.exports = router;