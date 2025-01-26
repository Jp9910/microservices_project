var express = require('express');
var router = express.Router();
var dbconnection = require('../config/database')
console.log("testarBD.js")

/* GET users listing. */
router.get('/', function(req, res, next) {
    const status = {
        "Status": "Running",
        "Solution": true
    };
    dbconnection.query('SELECT *', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
        status.Solution = results[0].solution
    });
    //dbconnection.end();
    console.log("rota testar DB chamada")
    res.send(status);
});

module.exports = router;