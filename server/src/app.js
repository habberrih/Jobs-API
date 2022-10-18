require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');
const authenticateUser = require('./middleware/authentication');
// error handlers
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-found');

app.use(express.json());

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;
