const express = require("express");
const app = express();
const port = 3000;

//Antes de los endpoints, usamos los middleware
app.use(express.json());








app.listen(port);