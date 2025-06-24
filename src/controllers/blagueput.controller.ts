import { Request, Response } from "express";
import Blague from "../models/blague.model";


export const updateBlague = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { question, reponse } = req.body;

  
  try {
    const blague = await Blague.findByPk(id);
    if (!blague) {
      return res
        .status(404)
        .json({ error: "Blague non trouvée" });
    }
    blague.question = question ?? blague.question;
    blague.reponse = reponse ?? blague.reponse;
    await blague.save();
    res.status(201).json(blague);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
