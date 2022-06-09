require("dotenv").config();
const port = process.env.PORT || 3035;
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express());
app.use(cors());

app.listen(port, () => console.log(`running on port ${port}`));

app.get("/", () => {});
