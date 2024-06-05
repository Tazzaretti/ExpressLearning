express = require('express');

router = express.Router()

router.get('/users', (req, res) => {
    console.log(req.body);
    res.render('users');
});

module.exports = router;