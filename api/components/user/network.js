const express = require('express');

const router = express.Router();

const response = require('../../../network/response');
router.get('/', function(req, res){
    res.send('Todo funciona');
    response.success.(req,res,'todo va bien', 200)
});

module.exports = router;