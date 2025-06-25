import app from './app';
import sequelize from './config/database';

// Le bouton ON/OFF pour allumer la maison
// Synchronisation des tables
sequelize.sync({alter: true}).then(() => {
  console.log("✅ Base de données synchronisée");
  
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
