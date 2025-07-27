const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Blagues',
      version: '1.0.0',
      description: 'API simple pour gérer des blagues'
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Serveur local'
      }
    ]
  },
  // SOLUTION: Chemin absolu depuis la racine du projet
  apis: [path.join(__dirname, '../routes/*.js')]
};

const specs = swaggerJsdoc(options);
module.exports = specs;