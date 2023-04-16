const db = require('../db');

module.exports.add = (req, res) => {
    db.query('INSERT INTO news (title, title2, img, content) VALUES (?, ?, ?, ?)', [req.body.title, req.body.title2, req.body.img, req.body.content], (err) => {
        if(err) throw err;
    });
}
module.exports.get = (req, res) => {
    db.query('SELECT *FROM news', ((err, result) => {
        if(err) throw err;
        res.send(result);
    }));
}