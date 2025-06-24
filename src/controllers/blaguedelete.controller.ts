import { Request, Response } from "express";
import Blague from "../models/blague.model";


export const deleteBlague = async (req: Request, res: Response) => {
  const { id } = req.params;

  
  try {
    const blague = await Blague.findByPk(id);
    if (!blague) {
      return res
        .status(404)
        .json({ error: "l'id n'existe pas ou la blague n'est pas trouver" });
    }
    
    await blague.destroy();
    res.status(204).json(blague); // 204 = No Content
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
