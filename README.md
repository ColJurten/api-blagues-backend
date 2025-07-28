## API Blagues Backend

API REST pour gérer une collection de blagues développée avec Node.js et Express.
Cette API permet de créer, consulter et récupérer des blagues aléatoirement. Elle utilise une base de données SQLite avec l'ORM Sequelize et propose une documentation Swagger interactive.

## Technologies utilisées

Node.js
Express.js
Sequelize (ORM)
SQLite
Swagger/OpenAPI
CORS, Helmet, Morgan

## URLs importantes

API Production: https://votre-app.onrender.com
Documentation Swagger: https://votre-app.onrender.com/api-docs
Frontend: https://coljurten.github.io/api-blagues-frontend

## Installation locale

**Prérequis**

Node.js version 16 ou supérieure
Git

**Étapes d'installation**

```bash
git clone https://github.com/coljurten/api-blagues-backend.git
cd api-blagues-backend
```

- Installer les dépendances
```bash
npm install
```

- Démarrer le serveur en mode développement
```bash
npm run dev
```

- Ou démarrer en mode production
```bash
npm start
```
Le serveur sera accessible sur http://localhost:3000

## Endpoints API

**Base URL**

Local: [http://localhost:3000/api/v1]
Production: [https://votre-app.onrender.com/api/v1]

## Liste des endpoints

**Récupérer toutes les blagues**

```bash
curl http://localhost:3000/api/v1/blagues
```

**Récupérer une blague par ID**
```bash
curl http://localhost:3000/api/v1/blagues/1
```

**Récupérer une blague aléatoire**
```bash
curl http://localhost:3000/api/v1/blagues/random
```

## Configuration
La base de données SQLite est automatiquement créée au premier démarrage dans le fichier database.sqlite.

## Documentation Swagger
La documentation interactive est disponible sur /api-docs


## Configuration CORS
L'API est actuellement configurée pour accepter les requêtes depuis :

[http://localhost:3000] (développement local)
[https://coljurten.github.io] (frontend GitHub Pages)


## Tests manuels
Vous pouvez tester l'API avec cURL, Postman ou directement via la documentation Swagger.