const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const user = [];
let lastId = user.length;

const date = Date();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Express"));

app.post("/register", (req, res) => {
  user.push({
    _id: ++lastId,
    stamp: date,
    name: req.body.name,
    email: req.body.email,
    mobileNumber: req.body.mobileNumber,
  });

  console.log(user);
  //   console.log(lastId);
  res.status(200).send({ lastId });
});

// app.get("/register", (req, res) => {
//   console.log(user);
//   res.send(user);
// });

app.listen(port, console.log("Server is running"));
