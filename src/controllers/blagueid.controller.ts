import { Request, Response } from 'express';
import Blague from '../models/blague.model';


export const getBlagueById = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const blague = await Blague.findByPk(id);

    if (!blague) {
      return res.status(404).json({ message: "Blague non trouvée" });
    }

    res.json(blague);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};