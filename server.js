const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 8088;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // submit forms 

app.use('/', require("./routes")) // "./routes/index" можно не писать index)
app.use('/catalog',  require("./routes/catalog"))
app.use('/user',  require("./routes/user"))


app.listen(PORT, () => {
  console.log(`Server запущен на порту ${PORT}`);
});
