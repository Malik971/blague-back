import express from 'express';
import sequelize from './config/database';
import blagueRoutes from './routes/blague.routes';
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger";

// Construction de la maison (connexion des pièces)

const app = express();

app.use(express.json());
app.use('/api/v1/blagues', blagueRoutes);

// Connexion BDD
sequelize.authenticate()
  .then(() => console.log('Connexion DB réussie'))
  .catch(err => console.error('Erreur DB :', err));

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
