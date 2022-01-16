console.clear();
const express = require("express");
const { ConnectDB } = require("./config/ConnectDB");
const { notFound, errorHandler } = require("./Middlewares/errorMiddleware");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });

// importint Routes
const studentRoute = require("./Routes/studentRoutes");
const adminRoute = require("./Routes/adminRoutes");
//importing from .env
const PORT = process.env.PORT;

//Connecting to MongoDB
ConnectDB();

//Creating Express App
const app = express();

//setting up middleware
app.use(express.json());
app.use(cors);

//Setting up Routes
app.use("/student", studentRoute);
app.use("/admin", adminRoute);

//handling wrong routes
app.use(notFound);

//handling errors in code
app.use(errorHandler);

// App Server Listening at PORT
app.listen(PORT, () => {
  console.log(`Server Started Running on PORT ${PORT}`);
});
