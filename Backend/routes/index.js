'use strict';
const express = require('express');
const router = express.Router();
const add = require('../controllers/manhole_add');
const check = require('../controllers/check_manhole');
const manholeInfo = require('../controllers/manhole_info');
//All routes.
router.get('/', (req, res) => { res.send('Welcome to HMWSSB') });
router.get('/addManhole', add.addManhole);
router.get('/overflow',check.checkOverflow);
router.get('/damage',check.checkDamage);
router.get('/noManhole',check.checkManhole);
router.post('/manholeinfo',manholeInfo.getInfo);
router.get('/resolved',manholeInfo.solved)

//Export the Router.
module.exports = router;
