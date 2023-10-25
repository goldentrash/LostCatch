require("dotenv").config();
require("./schedules/fetchFoundData");
require("./schedules/fetchLostData");

const {
  lostDB: { find: findLost },
  foundDB: { find: findFound },
} = require("./repositories");

const express = require("express");
const app = express();
app.use(express.json());
app.use(require("morgan")("dev"));

app.get("/lost", async (req, res, _next) => {
  const result = await findLost(req.query);

  return res.status(200).json({ result });
});

app.get("/found", async (req, res, _next) => {
  const result = await findFound(req.query);

  return res.status(200).json({ result });
});

app.all("/", (_req, res, _next) => {
  return res.status(404).end();
});

const { PORT } = require("./constant");
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
