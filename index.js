/**
 * Module dependencies.
 */
const express = require('express');
const authApp = express();

authApp.get('/login', (req, res, next) => {
	res.send('login form comes here!');
})

module.exports = appRouter;