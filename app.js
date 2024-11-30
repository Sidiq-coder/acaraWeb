const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// router
const categoriesRouter = require('./app/api/v1/categories/router');

//talents
const talentsRouter = require('./app/api/v1/talents/router');

//images
const imagesRouter = require('./app/api/v1/images/router');

//events
const eventsRouter = require('./app/api/v1/events/router');

// organizer
const organizerRouter = require('./app/api/v1/organizers/router');

// auth
const authRouter = require('./app/api/v1/auth/router');


// middleware
const notFoundMiddleware = require('./app/middleware/not-found');
const handleErrorMiddleware = require('./app/middleware/handler-error');

const v1 = '/api/v1/cms';
const no_cms = '/api/v1';
const auth = '/api/v1/auth';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Halo Pengguna",
    });
});

// router

app.use(v1, categoriesRouter);
app.use(v1, talentsRouter);
app.use(v1, imagesRouter);
app.use(v1, eventsRouter);
app.use(v1, organizerRouter);
app.use(v1, authRouter);



// middleware
app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
