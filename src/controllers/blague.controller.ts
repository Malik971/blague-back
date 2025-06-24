import { Request, Response } from 'express';
import Blague from '../models/blague.model';

// Le cerveau (logique des actions)

export const getAllBlagues = async (req: Request, res: Response) => {
  try {
    // const count = await Blague.count();
    // const random = Math.floor(Math.random() * count);
    // const blague = await Blague.findOne({ offset: random });
    const blague = await Blague.findAll(); // 🍽 il va dans le frigo

    if (!blague) return res.status(404).json({ message: "Aucune blague trouvée" });

    res.json(blague); // et renvoie le plat (JSON)
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
