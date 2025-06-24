import { Request, Response } from "express";
import Blague from "../models/blague.model";

export const getRandomBlague = async (req: Request, res: Response) => {
  try {
    const blagues = await Blague.findAll();

    if (blagues.length === 0) {
      return res.status(404).json({ message: "Aucune blague trouvée." });
    }

    const randomIndex = Math.floor(Math.random() * blagues.length);
    const blague = blagues[randomIndex];

    res.json(blague);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
