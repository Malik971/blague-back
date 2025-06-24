import express, { RequestHandler } from "express";
import { getAllBlagues } from "../controllers/blague.controller";
import { getBlagueById } from "../controllers/blagueid.controller";
import { createBlague } from "../controllers/blaguepost.controller";

// Les portes d’entrée (URL)
// Le cerveau (logique des actions)
/**
 * @swagger
 * /:
 *   get:
 *     summary: Récupère toutes les blagues
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Liste de blagues
 */

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Récupère une blague par ID
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la blague
 *     responses:
 *       200:
 *         description: Une seule blague
 *       404:
 *         description: Blague non trouvée
 */

/**
 * @swagger
 * /:
 *   post:
 *     summary: Crée une nouvelle blague
 *     tags: [Blagues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - reponse
 *             properties:
 *               question:
 *                 type: string
 *               reponse:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blague créée
 */

const router = express.Router();

// Route : /api/v1/blagues/random
router.get("/", getAllBlagues as RequestHandler); // ← Il passe toutes les commandes au contrôleur (le chef)
router.get("/:id", getBlagueById as RequestHandler); // ← Il passe une commande au contrôleur (le chef)
router.post("/", createBlague as RequestHandler); // ← Il passe une demande de création commande au contrôleur (le chef)

export default router;
