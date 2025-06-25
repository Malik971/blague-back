import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

// Définition du type des attributs
interface UserAttributes {
  id: number;
  email: string;
  password: string;
  role: 'user' | 'admin';
}

// Pour la création, on ignore le champ `id`
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// Définition du modèle
class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  public id!: number;
  public email!: string;
  public password!: string;
  public role!: 'user' | 'admin';

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Initialisation du modèle
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'),
      allowNull: false,
      defaultValue: 'user',
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false, // pour createdAt / updatedAt
  }
);

export default User;
