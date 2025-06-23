import { Sequelize } from 'sequelize';

// Mon grimoire magique pour parler à la base
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database/blagues.sqlite',
  logging: false,
});

export default sequelize;
