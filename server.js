const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger');
const { initDatabase } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000; // ✅ Important pour Render

// Middleware
app.use(helmet());
app.use(cors({
  origin: ['http://localhost:3000', 'https://votre-username.github.io'], // ✅ Ajoutez votre domaine GitHub Pages
  credentials: true
}));
app.use(morgan('combined'));
app.use(express.json());

// Swagger - Mettre à jour l'URL pour la production
const swaggerOptions = {
  ...swaggerSpecs,
  servers: [
    {
      url: process.env.NODE_ENV === 'production' 
        ? 'https://votre-app.onrender.com/api/v1'
        : 'http://localhost:3000/api/v1',
      description: process.env.NODE_ENV === 'production' ? 'Production' : 'Development'
    }
  ]
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));

// Routes
app.use('/api/v1/blagues', require('./routes/blagues'));

// Route de health check pour Render
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'API Blagues is running',
    timestamp: new Date().toISOString()
  });
});

app.get('/', (req, res) => {
  res.json({
    message: 'API Blagues v1.0.0',
    docs: '/api-docs',
    health: '/health',
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
    app.listen(PORT, '0.0.0.0', () => { // ✅ Écouter sur toutes les interfaces
      console.log(`✅ Serveur démarré sur le port ${PORT}`);
      console.log(`📖 Documentation: ${process.env.NODE_ENV === 'production' ? 'https://votre-app.onrender.com' : 'http://localhost:3000'}/api-docs`);
    });
  } catch (error) {
    console.error('❌ Erreur lors du démarrage:', error);
    process.exit(1);
  }
};

startServer();