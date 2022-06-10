require("dotenv").config();
const port = process.env.PORT || 3035;
const express = require("express");
const cors = require("cors");
const ctrl = require("./controller");

const app = express();

app.use(express());
app.use(cors());

app.get("/", ctrl.getInfo);
app.post("/api/info", ctrl.createInput);

app.listen(port, () => console.log(`running on port ${port}`));
