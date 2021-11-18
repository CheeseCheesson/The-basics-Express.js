const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 8088;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // submit forms 

app.get("/", (req, res) => {
  console.log(req.query);
  res.send(
    `/?myKey = anyValue ------*** ${req.query.myKey} ***---------- получаем (myValue)`
  );
});
app.get("/catalog", (req, res) => {
  res.send("This is catalog");
});
app.get("/catalog/:id", (req, res) => {
  res.send("This is catalog id" + req.params.id);
});
app.get("/catalog/:id/section/:part", (req, res) => {
  let info = "catalog " + req.params.id + " part: " + req.params.part;
  res.send(info);
});
app.post("/", (req, res) => {
  res.send("Post method");
});


app.post("/login", (req, res) => {
  console.log(req.body);
  const users = [
    { login: "kira711", password: "asdqwesd" },
    { login: "Eva", password: "asd23sd" }
]; // сюда приходит информация из БД
// найдем find и вернём пользователя у которого совпадает логин и пароль
  const user = users.find(user => {
    return user.login === req.body.login && user.password === req.body.password
  })

  if(user){
  return res.json({massage: "Post method LOGINED"});
  } 
    res.status(401).json({massage: "Incorrect login or password"})
});



app
  .route("/user")
  .get((req, res) => {
    res.send("get user");
  })
  .post((req, res) => {
    res.send("create user...");
  })
  .put((req, res) => {
    res.send("update user...");
  })
  .delete((req, res) => {
    res.send("delete user...");
  });

app.listen(PORT, () => {
  console.log(`Server запущен на порту ${PORT}`);
});
