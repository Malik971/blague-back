import express, { RequestHandler } from "express";
import { getAllBlagues } from "../controllers/blague.controller";

const router = express.Router();

// Route : /api/v1/blagues/random
router.get("/", getAllBlagues as RequestHandler);

export default router;