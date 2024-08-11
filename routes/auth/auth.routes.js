

const express = require('express');
const router = express.Router();
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('../../swagger');

/**
 * @swagger
 * /auth/login:
 *   get:
 *     summary: Login endpoint
 *     description: Endpoint for user login
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Login successful
 */
router.get('/login', login);

function login(req, res) {
    res.send('Login successful');
}

module.exports = router;