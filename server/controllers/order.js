const db = require('../db');

module.exports.card = (req, res) => {
    db.query('INSERT INTO ordercard (card, year, currency, type, filial, name, lName, fName, phone, address, secretWord, frontPass, backPass) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [req.body.card, req.body.year, req.body.currency, req.body.type, req.body.filial, req.body.name, req.body.lName, req.body.fName, req.body.phone, req.body.address, req.body.secretWord, req.body.frontPass, req.body.backPass], (err => {
        if(err) throw err;
    }));
}