const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// const connection = require('./database/connection');

const routes = express.Router();

// SESSION ROUTERS
routes.post('/sessions', SessionController.create);

// ONGS ROUTERS
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// INCIDENTS ROUTERS
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

// PROFILE INCIDENTS
routes.get('/profile', ProfileController.index);


module.exports = routes;

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação ...)
 *    Ex: http://localhost:3333/users?name=Emanuel
 * 
 * Route Params: Parâmetros utilizados para identificar recursos
 *    Ex: http://localhost:3333/users/28444
 * 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *    Ex: http://localhost:3333/users
 *    {
 *      "name": "Emanuel",
 *      "pwd": "12345"
 *    }
 */

/**
 *  Driver: SELECT * FROM users
 *  Query Builder: table('users').select('*').where()
 */