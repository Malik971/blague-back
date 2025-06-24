import { Request, Response } from "express";
import Blague from "../models/blague.model";


export const createBlague = async (req: Request, res: Response) => {
  const { question, reponse } = req.body;

  if (!question || !reponse) {
    return res
      .status(400)
      .json({ error: "Champs requis : question et reponse" });
  }

  try {
    const nouvelleBlague = await Blague.create({ question, reponse });
    res.status(201).json(nouvelleBlague);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création" });
  }
};
