require('dotenv').config()
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mongoSanitize = require('express-mongo-sanitize');
const app = express();
const port = process.env.PORT || 8088;


app.engine('ejs', require('ejs-mate')) // layout для шаблона
app.set('views', path.join(__dirname, 'views')); // папка с шаблонизатором 
app.set('view engine', 'ejs'); // устанавливаем шаблонизатор чтобы им пользоваться без requer


app.use(mongoSanitize());
app.use(morgan(process.env.LOG_LEVEL));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // submit forms 

app.use(express.static(path.join(__dirname, 'public')))  


app.use('/', require("./routes")) // "./routes/index" можно не писать index)
app.use('/catalog',  require("./routes/catalog"))
app.use('/user',  require("./routes/user"))



app.use(function(err, req, res, next) {
  res.status(500).send('Something went wrong')
})

app.listen(port, () => {
  console.log(`Server запущен ${process.env.DOMAIN} : ${port}`);
});
