require("dotenv").config();
const db = require("mongoose");

db.connect(process.env.DB_CONNECT, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
module.exports = db;