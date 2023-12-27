import express from 'express';

const authApp = express();

authApp.get('/login', (req, res, next) => {
	res.send('login form comes here!');
})

export default authApp;