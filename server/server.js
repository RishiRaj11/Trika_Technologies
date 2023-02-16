import express  from "express";
import connection from "./dbconnection.js";
const app=express();


const URL =process.env.MONGODB_URI || "mongodb+srv://rraj58361:58361@cluster0.x3c4uqf.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;


connection(URL);
app.listen(PORT, () => {
    console.log("Listening at port  5000");
  });