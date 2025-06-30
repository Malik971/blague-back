import express, { RequestHandler } from "express";
import { createAdmin } from "../controllers/user.controller";
import { verifyAdminSecret } from "../middleware/verifyAdminSecret";

const router = express.Router();

router.post("/admin", verifyAdminSecret, (req, res, next) => {
  Promise.resolve(createAdmin(req, res))
    .then(() => undefined)
    .catch(next);
});

export default router;
