require("dotenv").config();
const {
  lostDB: { find: findLost },
  foundDB: { find: findFound },
} = require("./repositories");

const express = require("express");
const app = express();
app.use(express.json());
app.use(require("morgan")("dev"));

app.get("/lost", async (req, res, next) => {
  const result = await findLost(req.query);

  return res.status(200).json({ result });
});

app.get("/found", async (req, res, next) => {
  const result = await findFound(req.query);

  return res.status(200).json({ result });
});

app.all("/", (req, res, next) => {
  return res.status(404).end();
});

const port = 3_000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
