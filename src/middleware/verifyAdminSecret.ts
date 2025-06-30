import { RequestHandler } from "express";

export const verifyAdminSecret: RequestHandler = (req, res, next) => {
  const secretFromClient = req.headers["x-admin-secret"];

  if (secretFromClient !== process.env.ADMIN_CREATION_SECRET) {
    res.status(403).json({ message: "Accès interdit : secret invalide." });
    return; // ← Très important : on sort de la fonction
  }

  next(); // ← sinon on continue
};
