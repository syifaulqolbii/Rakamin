require('dotenv').config();

const express = require('express');
const app = express();
const errorHandler = require('./middlewares/error-handler');
const port = process.env.PORT || 3000;
const router = require('./routes');
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', router);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

