require("dotenv").config();
const express = require("express");
//require("./db.js");
const morgan = require("morgan");
const cors = require("cors");

//set app
const app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.json());

//middlewares
app.use(cors());
app.use(morgan("dev"));

//init
app.listen(app.get("port"), () => {
  console.log(`API running at http://localhost:${app.get("port")}`);
});
