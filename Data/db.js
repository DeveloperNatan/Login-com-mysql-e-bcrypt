const Sequelize = require("sequelize");
// conexao database
const sequelize = new Sequelize("sistemadecadastro", "root", "34545417Natan@", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão realizada com sucesso com Banco de Dados!");
  })
  .catch((err) => {
    console.log("Não foi possivel realizar a conexao com Banco de Dados!");
  });

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
