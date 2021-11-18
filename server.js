const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = 8088;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // submit forms 
//* app.use(express.static('public')) создфть статические файлы html css pdf и т.д.
app.use(express.static(path.join(__dirname, 'public'))) //^ __dirname это пременная Nodejs она содержит абсолютный
                                                        //^ путь в системе console.log(__dirname);
                                                        //^ E:\Frontend\2021\november\Forms\mongoose     
                                                                          
//& app.use(express.static('files')) здесть експресс будет искать во вторую очередь файлы html css pdf и т.д.
//!виртульный путь к папке app.use('static', express.static('public')) теперь в путь url надо добавлять static


app.use('/', require("./routes")) // "./routes/index" можно не писать index)
app.use('/catalog',  require("./routes/catalog"))
app.use('/user',  require("./routes/user"))


app.listen(PORT, () => {
  console.log(`Server запущен на порту ${PORT}`);
});
