import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database/blagues.sqlite', // ou database.sqlite
  logging: false,
});

export default sequelize;
