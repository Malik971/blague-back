import { Request, Response } from 'express';
import User from '../models/user.model';
import bcrypt from 'bcrypt';

export const createAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password, secret } = req.body;

    // Vérifie le secret d'accès
    if (secret !== process.env.ADMIN_CREATION_SECRET) {
      return res.status(403).json({ message: "Accès interdit : secret invalide." });
    }

    // Vérifie si un admin existe déjà
    const existingAdmin = await User.findOne({ where: { role: 'admin' } });
    if (existingAdmin) {
      return res.status(400).json({ message: "Un administrateur existe déjà." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = await User.create({
      email,
      password: hashedPassword,
      role: 'admin',
    });

    return res.status(201).json({
      message: "Admin créé avec succès.",
      user: { id: newAdmin.id, email: newAdmin.email, role: newAdmin.role }
    });

  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur", error });
  }
};
