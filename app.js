import express from 'express';
import { bootstrap, server, logger } from 'superexpress';

const app = express();
const port = process.env.APP_PORT || 3000;

app.get('/', (req, res, next) => {
	res.send('hello world!');
})

// Error-handling middleware
app.use(function(req, res, next) {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
});

app.use(function (err, req, res, next) {
	const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
	
	logger.error(err.message)
	if(statusCode !== 404)
		logger.info(err.stack)

	res.status(statusCode);
	res.json({
		success: false,
		message: err.message,
		stack: process.env.APP_ENV === 'production' || statusCode === 404 ? undefined : err.stack,
	});
});

bootstrap(app);
server.listen(port);