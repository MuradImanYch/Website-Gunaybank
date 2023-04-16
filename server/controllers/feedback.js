const db = require('../db');

module.exports.feedback = (req, res) => {
    db.query('INSERT INTO feedback (name, lName, email, phone, title, isCustomer, text, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [req.body.name, req.body.lName, req.body.email, req.body.phone, req.body.title, req.body.isCustomer, req.body.text, req.body.type], (err => {
        if(err) throw err;
    }));
}

module.exports.get = (req, res) => {
    db.query('SELECT * FROM feedback', ((err, result) => {
        if(err) throw err;
        res.send(result);
    }));
}

module.exports.del = (req, res) => {
    db.query(`DELETE FROM feedback WHERE id=${req.body.id}`, ((err) => {
        if(err) throw err;
    }));
}