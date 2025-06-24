import express, { RequestHandler } from "express";
import { getAllBlagues } from "../controllers/blague.controller";
import { getBlagueById } from "../controllers/blagueid.controller";
import { createBlague } from "../controllers/blaguepost.controller";
import { updateBlague } from "../controllers/blagueput.controller";
import { deleteBlague } from "../controllers/blaguedelete.controller";

// Les portes d’entrée (URL)
// Le cerveau (logique des actions)
const router = express.Router();

// Route : /api/v1/blagues/random
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
router.get("/", getAllBlagues as RequestHandler); // ← Il passe toutes les commandes au contrôleur (le chef)

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
router.get("/:id", getBlagueById as RequestHandler); // ← Il passe une commande au contrôleur (le chef)

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
 *         description: Blague crée
 *       500:
 *         description: Erreur serveur
 */
router.post("/", createBlague as RequestHandler); // ← Il passe une demande de création commande au contrôleur (le chef)

/**
 * @swagger
 * /api/v1/blagues/{id}:
 *   put:
 *     summary: Modifier une blague existante
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la blague à modifier
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
 *                 example: Quel est le comble pour un électricien ?
 *               reponse:
 *                 type: string
 *                 example: De ne pas être au courant.
 *     responses:
 *       200:
 *         description: Blague modifiée avec succès
 *       404:
 *         description: Blague non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.put("/:id", updateBlague as RequestHandler)

/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Supprimer une blague existante
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la blague à supprimer
 *     responses:
 *       204:
 *         description: Blague supprimée (aucun contenu)
 *       404:
 *         description: Blague non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:id", deleteBlague as RequestHandler)

export default router;
