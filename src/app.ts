import express from 'express';
import sequelize from './config/database';
import blagueRoutes from './routes/blague.routes';

const app = express();

app.use(express.json());
app.use('/api/v1/blagues', blagueRoutes);

// Connexion BDD
sequelize.authenticate()
  .then(() => console.log('Connexion DB réussie'))
  .catch(err => console.error('Erreur DB :', err));

export default app;
