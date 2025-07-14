const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 8001;
const {connectDb} = require("./connect.js");
const app = express();
dotenv.config();
connectDb(process.env.MONGO_URI).then(() =>
  console.log("MongoDB connected!")
);
app.listen(PORT, ()=>{
    console.log(`Server listening on PORT: ${PORT}`)

})