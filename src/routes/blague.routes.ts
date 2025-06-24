import express, { RequestHandler } from "express";
import { getAllBlagues } from "../controllers/blague.controller";
import { getBlagueById } from "../controllers/blagueid.controller";
import { createBlague } from "../controllers/blaguepost.controller";

// Les portes d’entrée (URL)

const router = express.Router();

// Route : /api/v1/blagues/random
router.get("/", getAllBlagues as RequestHandler);
router.get("/:id", getBlagueById as RequestHandler);
router.post("/", createBlague as RequestHandler);

export default router;