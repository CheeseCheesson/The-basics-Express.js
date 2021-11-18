const express = require("express"),
  router = express.Router();

//! router.get("/catalog/:id/section/:part",(req, res) ={}) catalog можно не писать, т.к. его мы опишем в server.js здесь останется /:id/section/:part

router.get("/", (req, res) => {
  res.send("This is catalog");
});
router.get("/:id", (req, res) => {
  res.send("This is catalog id" + req.params.id);
});
router.get("/:id/section/:part", (req, res) => {
  let info = "catalog " + req.params.id + " part: " + req.params.part;
  res.send(info);
});

module.exports = router;

// отправляется в server и монтируется в app.use('/', require("./catalog")) 
