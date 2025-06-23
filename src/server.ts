import app from './app';

// Le bouton ON/OFF pour allumer la maison

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
