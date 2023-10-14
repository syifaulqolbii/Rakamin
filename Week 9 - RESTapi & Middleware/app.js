require('dotenv').config();

const express = require('express');
const app = express();
const errorHandler = require('./middlewares/error-handler');
const port = process.env.PORT || 3000;
const router = require('./routes');
const cors = require('cors');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/v1', router);
app.use(errorHandler);

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Homework 9 - REST API & Middleware',
            version: '1.0.0',
            description: 'This is a simple CRUD API application made with Express and documented with Swagger',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./routes/*'],
}

const specs = swaggerJsDoc(options);
// serve docs api with swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api/v1`);
});

