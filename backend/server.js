const express = require("express");
const { ConnectDB } = require("./config/ConnectDB");
require("dotenv").config({ path: "./config/.env" });

// importint Routes

//importing from .env
const PORT = process.env.PORT;

//Connecting to MongoDB
ConnectDB();

//Creating Express App
const app = express();

//setting up middleware
app.use(express.json());


//Setting up Routes
app.use('/',)

// App Server Listening at PORT
app.listen(PORT, () => {
  console.log(`Server Started Running on PORT ${PORT}`);
});
