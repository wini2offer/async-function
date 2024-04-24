const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const bodyparser = require("body-parser");
const studentRoute = require("./routes/studentRoute");

const connectDB = require("./database/db");
connectDB();

app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(studentRoute);

app.listen(port, () => {
  console.log(` server started successfully.http://localhost:/${port}`);
});
