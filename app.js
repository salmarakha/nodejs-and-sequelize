const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

// DB connection
require('./config/connection');

const PORT = 3000;

app.use('/', routes);

app.use((err, req, res, next) => {
    // global error handler
    if (err)
        console.log(err);
});

app.listen(PORT, ()=> {
    console.log(`Server is up and running on port: ${PORT}`);
});