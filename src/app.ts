import express from "express";
import sequelize from "./config/database";
import blagueRoutes from "./routes/blague.routes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger";
import cors from "cors";
import dotenv from "dotenv";
import './models/user.model';
import router from "./routes/user.routes";

// Construction de la maison (connexion des pièces)

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/blagues", blagueRoutes);
dotenv.config();

// Autentification
app.use("/api/v1/users", router);

// Connexion BDD
sequelize
  .authenticate()
  .then(() => console.log("Connexion DB réussie"))
  .catch((err) => console.error("Erreur DB :", err));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
