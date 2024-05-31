const db = require('../Data/db');

const Users = db.sequelize.define("usuarios", {
  nome: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  senha:{
    type: db.Sequelize.NUMBER,
    allowNull: false
  }
});

module.exports = Users;
