const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

// Enable all CORS requests
app.use(cors());

app.use(express.json());

// DB connection
const sequelize = require('./config/connection');
/**
 * Synchronizing all models at once.
 * Models must be synchronized with the database to create new tables or modify existing ones
    depending on the model.
 */
sequelize.sync();

// declare models associations
(require('./models/Associations'))();

const PORT = 3000;

app.use('/', routes);

app.use((err, req, res, next) => {
    // global error handler
    if (err) {
        console.log(err);
        res.status(503).json({ error: err.message })
    }
});

app.listen(PORT, ()=> {
    console.log(`Server is up and running on port: ${PORT}`);
});