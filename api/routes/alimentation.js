var express = require('express');
var router = express.Router();
const service = require ('../services/alimentation');


router.get ('/', service.artisansAlimentation);


module.exports = router;
