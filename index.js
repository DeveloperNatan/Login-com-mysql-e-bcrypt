const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
const Users = require("./models/connection");
const bcrypt = require("bcrypt");

app.engine("html", require("ejs").renderFile);
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "views")));

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/add", function (req, res) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.senha, salt, (err, hash) => {
      if (err) {
        res.send("Houve um erro ao salvar o Usuário!");
      } else {
        Users.create({
          nome: req.body.nome,
          email: req.body.email,
          senha: hash, 
        })
          .then(() => {
            res.redirect('/')
          })
          .catch((err) => {
            res.send("Houve um erro ao criar o Usuário!");
          });
      }
    });
  });
});

app.listen(9091, function () {
  console.log("Servidor Rodando na porta na url http://localhost:9091");
});
