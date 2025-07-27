const express = require('express');
const router = express.Router();
const blagueController = require('../controllers/blagueController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Blague:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID de la blague
 *         contenu:
 *           type: string
 *           description: Contenu de la blague
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     BlagueInput:
 *       type: object
 *       required:
 *         - contenu
 *       properties:
 *         contenu:
 *           type: string
 *           example: "Quelle est la femelle du hamster ? L'Amsterdam !"
 */

/**
 * @swagger
 * /blagues:
 *   post:
 *     summary: Ajouter une blague
 *     tags: [Blagues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BlagueInput'
 *     responses:
 *       201:
 *         description: Blague créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Blague'
 *       400:
 *         description: Erreur - contenu manquant
 */
router.post('/', blagueController.ajouterBlague);

/**
 * @swagger
 * /blagues:
 *   get:
 *     summary: Récupérer toutes les blagues
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Liste des blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Blague'
 */
router.get('/', blagueController.obtenirToutesBlagues);

/**
 * @swagger
 * /blagues/random:
 *   get:
 *     summary: Récupérer une blague aléatoire
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Blague'
 *       404:
 *         description: Aucune blague disponible
 */
router.get('/random', blagueController.obtenirBlagueAleatoire);

/**
 * @swagger
 * /blagues/{id}:
 *   get:
 *     summary: Récupérer une blague par ID
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la blague
 *         example: 1
 *     responses:
 *       200:
 *         description: Blague trouvée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Blague'
 *       404:
 *         description: Blague non trouvée
 */
router.get('/:id', blagueController.obtenirBlague);

module.exports = router;