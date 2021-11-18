const express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  res.render('pages/index.ejs', {title: "Express MongoDB"});
});
router.get("/about", (req, res) => {
  res.render('pages/about.ejs', {title: "About us", showHeader: true});
});

router.post("/", (req, res) => {
  res.send("Post method");
});

router.delete("/", (req, res) => {
  res.send("DELETE method");
});

router.post("/login", (req, res) => {
  console.log(req.body);
  const users = [
    { login: "kira711", password: "asdqwesd" },
    { login: "Eva", password: "asd23sd" },
  ]; // сюда приходит информация из БД
  // найдем find и вернём пользователя у которого совпадает логин и пароль
  const user = users.find((user) => {
    return user.login === req.body.login && user.password === req.body.password;
  });

  if (user) {
    return res.json({ massage: "Post method LOGINED" });
  }
  res.status(401).json({ massage: "Incorrect login or password" });
});

module.exports = router;

// отправляется в server и монтируется в app.use('/', require("./routes/index")) 
