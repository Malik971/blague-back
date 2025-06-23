import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

// Le plan de construction d'une blague

// 1. Définition du type des attributs
interface BlagueAttributes {
  id: number;
  question: string;
  reponse: string;
}

// 2. Pour la création, on ignore le champ `id` (auto-incrémenté)
interface BlagueCreationAttributes extends Optional<BlagueAttributes, 'id'> {}

// 3. Classe Blague qui hérite du modèle Sequelize
class Blague extends Model<BlagueAttributes, BlagueCreationAttributes>
  implements BlagueAttributes {
  public id!: number;
  public question!: string;
  public reponse!: string;
}

// 4. Initialisation du modèle
Blague.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reponse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Blague',
    tableName: 'blagues',
    timestamps: false,
  }
);

export default Blague;
