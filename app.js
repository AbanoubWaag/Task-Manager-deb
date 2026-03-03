require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());

// DB Connection
// use async/await  instead of .then() and .catch() for better readability and error handling
 async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log("MongoDB Connected");


  }catch (error) {
    // use console.error instead of console.log for error messages
    console.error("Error connecting to MongoDB:", error);
    //use process.exit(1) to exit the process with a failure code instead of just logging the error
    process.exit(1); 

  }
 } 
 connectDB();




app.use("/api", taskRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)});
