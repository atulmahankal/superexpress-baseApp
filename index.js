import express from 'express';

export const router = express();

router.get('/login', (req, res, next) => {
	res.send('login form comes here!');
})