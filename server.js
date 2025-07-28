const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger');
const { initDatabase } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',                    
    'https://coljurten.github.io'              
  ],
  credentials: true
}));

app.use(express.json());

// Documentation Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Routes
app.use('/api/v1/blagues', require('./routes/blagues'));

app.get('/', (req, res) => {
  res.json({
    message: 'API Blagues v1.0.0',
    docs: '/api-docs',
    endpoints: {
      'POST /api/v1/blagues': 'Ajouter une blague',
      'GET /api/v1/blagues': 'Lister toutes les blagues',
      'GET /api/v1/blagues/:id': 'Récupérer une blague par ID',
      'GET /api/v1/blagues/random': 'Récupérer une blague aléatoire'
    }
  });
});

// Démarrage
const startServer = async () => {
  try {
    await initDatabase();
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Serveur démarré sur le port ${PORT}`);
      console.log(`Documentation: http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error('Erreur lors du démarrage:', error);
    process.exit(1);
  }
};

startServer();