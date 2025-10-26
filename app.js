require("dotenv").config();
const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(cors());

app.use(express.json());

// Routes
require("./src/modules/routes/api")(app);

// Server listen
app.listen(port, () => {
  console.log(`Aplikasi berjalan di port ${port}`);
});
