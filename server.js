const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect DB
connectDB();

// ROUTES (STEP 6 goes here 👇)
const projectRoutes = require("./routes/projectRoutes");
app.use("/api/projects", projectRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});