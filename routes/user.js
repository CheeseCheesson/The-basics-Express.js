const express = require("express"),
  router = express.Router();
const config = require("../config/config");

const User = require("../models/User");

// Connection.connectToMongo()

router.route("/").get(async (req, res, next) => {
  let content = [];

  try {
    content = await User.find({});
  } catch (err) {
    throw next(err);
  }

  res.render("pages/users", {
    title: "Users",
    siteName: config.siteName,
    content,
  });
});

router
  .route("/:id")
  .get(async (req, res, next) => {
    const id = req.params.id;

    let content = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      _id: id,
    };
    if (id !== "create") {
      try {
        content = await User.findById(id).exec();
        // let userUpper = await content.getNameInUpperCase()
      } catch (err) {
        throw next(err);
      }
    }

    res.render("pages/user", {
      title: "Users",
      siteName: config.siteName,
      content,
    });
  })
  .post((req, res, next) => {
    let user = new User(req.body);

    user.save(req.body, (err, result) => {
      if (err) {
        throw next(err);
      }
      res.redirect("/user");
    });
  })
  .put((req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {runValidators: true}, (err, result) => {
      if (err) {
        return res.status(400).json({message: 'err.message'})
      }
      res.json({ message: "updated" });
    });
  })
  .delete((req, res) => {

    User.findByIdAndRemove( req.params.id, (err, result) => {
        if (err) {
          return res.status(400).json({message: 'err.message'})
        }
        res.json({ message: "deleted" });
      });
  });

module.exports = router;

// отправляется в server и монтируется в app.use('/', require("./user"))
