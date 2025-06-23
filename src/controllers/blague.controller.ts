import { Request, Response } from 'express';
import Blague from '../models/blague.model';

export const getAllBlagues = async (req: Request, res: Response) => {
  try {
    // const count = await Blague.count();
    // const random = Math.floor(Math.random() * count);
    // const blague = await Blague.findOne({ offset: random });
    const blague = await Blague.findAll();

    if (!blague) return res.status(404).json({ message: "Aucune blague trouvée" });

    res.json(blague);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
