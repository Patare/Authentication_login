require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router");
require("./db/conn");
const cors = require("cors");
const cookiParser = require("cookie-parser");
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`server is running PORT no ${PORT}`);
});
