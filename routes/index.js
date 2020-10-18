var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab2' });
});

router.get('/guraishbir', (req, res, next)=> {
    res.render('guraishbir', { title: 'Guraishbir Singh' });
});

router.get('/jasbir', (req, res, next) => {
    res.render('jasbir', { title: 'Jasbir Singh' });
});

router.get('/sukhmohan', (req, res, next) => {
    res.render('sukhmohan', { title: 'Sukhmohan Kaur' });
});

router.get('/anmol', (req, res, next) => {
    res.render('anmol', { title: 'Anmol' });

});
module.exports = router;
