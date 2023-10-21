const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes/index');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/v1', routes);
app.use('/assets', express.static('assets'));

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(404);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {message: error.message}
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/api/v1');
});

module.exports = app;

