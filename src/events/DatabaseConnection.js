const mongoose = require("mongoose");
const mongo = require('mongoose')
var Schema = mongoose.Schema;
const chalk = require("chalk");

mongoose.connect("mongodb+srv://dicsty-economy:908xHU16ejcDdz7G@cluster0.9iqkw.mongodb.net/economy",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  error => {
    if (error) {
      console.log(`Erro: ${error}`);
      process.exit(1);
      return 1;
    }
    console.log(`[${chalk.green("DATABASE")}] Conectado ao banco de dados\n-----------------------------`);
    return 0;
  }
)

module.exports = mongoose.model(
'Money',
new mongo.Schema({
  id: String,
  coins: Number
})


);