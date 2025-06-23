import sequelize from "./config/database";
import Blague from "./models/blague.model";

// Liste de blagues à insérer
const blagues = [
  {
    question: "Quel est le sport le plus fruité ?",
    reponse: "La boxe, car tu te prends des pêches dans la poire et tu tombes dans les pommes.",
  },
  {
    question: "Quel est l’animal le plus heureux ?",
    reponse: "Le hibou, parce que sa femme est chouette.",
  },
  {
    question: "Que dit un oignon quand il se cogne ?",
    reponse: "Aïe.",
  },
  {
    question: "Quel est le comble pour un marin ?",
    reponse: "Avoir le nez qui coule.",
  },
];

async function seedDatabase() {
  try {
    await sequelize.sync({ force: true }); // Supprime et recrée les tables
    await Blague.bulkCreate(blagues); // Insère toutes les blagues

    console.log("✅ Base de données seedée avec succès !");
    process.exit();
  } catch (error) {
    console.error("❌ Erreur lors du seed :", error);
    process.exit(1);
  }
}

seedDatabase();
