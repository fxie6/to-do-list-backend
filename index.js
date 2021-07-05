const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
// Import routes
const todoRoute = require("./routes/todos");

dotenv.config();

app.use(cors());

// Connect to mongo DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("connected to mongo db");
  }
);

// Middleware
app.use(express.json());
// Route middleware
app.use("/api/todos", todoRoute);

app.listen(3001, () => console.log("Server up and running"));
