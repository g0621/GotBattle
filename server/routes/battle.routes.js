const express = require('express');
const router = express.Router();

const battleControl = require('../controller/battle.controller');

router.get('',battleControl.getAllBattle);

router.get('/populate',battleControl.populateFromCSV);

router.get('/search',battleControl.search);

router.get('/list',battleControl.allPlaces);

router.get('/count',battleControl.allBattleCount);

router.get('/locStartsWith',battleControl.locStartsWith)

module.exports = router;



