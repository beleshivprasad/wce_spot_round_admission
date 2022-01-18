console.clear();
const express = require("express");
const { ConnectDB } = require("./config/ConnectDB");
const { notFound, errorHandler } = require("./Middlewares/errorMiddleware");
require("dotenv").config();
const cors = require("cors");

// importint Routes
const studentRoute = require("./Routes/studentRoutes");
const adminRoute = require("./Routes/adminRoutes");
const vacancyRoute = require("./Routes/vacancyRoutes");
//importing from .env
const PORT = process.env.PORT;

//Connecting to MongoDB
ConnectDB();

//Creating Express App
const app = express();

//setting up middleware
app.use(express.json());

//Setting up Routes
app.use("/student", studentRoute);
app.use("/admin", adminRoute);
app.use("/vacancy", vacancyRoute);

//handling wrong routes
app.use(notFound);

//handling errors in code
app.use(errorHandler);

app.use(cors());
// App Server Listening at PORT
app.listen(PORT, () => {
  console.log(`Server Started Running on PORT ${PORT}`);
});
