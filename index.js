/**
 * Module dependencies.
 */
const router = require('express').Router();

router.get('/login', (req, res, next) => {
	res.send('login form comes here!');
})

module.exports = router;