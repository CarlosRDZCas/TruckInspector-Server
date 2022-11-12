const express = require('express');
const operadorsController = require('../../controllers/operadorsController');

const router = express.Router();

router.post('/postOperadors', operadorsController.postOperadors)
    .get('/getOperadors', operadorsController.getOperadors)
    .get('/getOperadorsByRFCandSCAC/:rfc/:scac', operadorsController.getOperadorsByRFCandSCAC)

module.exports = router;
