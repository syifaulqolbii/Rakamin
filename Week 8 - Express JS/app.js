const express = require('express');
const app = express();
const port = 3000;

const router = require('./routes');


// Set the view engine
app.set('view engine', 'ejs');

// Use the router
app.use(router);

// Start listening server
app.listen(port, () => {
    console.log(`Successfully listening at http://localhost:${port}`);
});
