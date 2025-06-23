import express, { RequestHandler } from "express";
import { getRandomBlague } from "../controllers/blague.controller";

const router = express.Router();

// Route : /api/v1/blagues/random
router.get("/random", getRandomBlague as RequestHandler);

export default router;