const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const r = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
require('./config/db');

const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


r.routes(app);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});