const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const Blague = sequelize.define('Blague', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  contenu: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Base de données connectée');
    await sequelize.sync();
    console.log('Tables créées');
  } catch (error) {
    console.error('Erreur base de données:', error);
  }
};

module.exports = {
  sequelize,
  Blague,
  initDatabase
};