import express  from "express";
import cors from "cors"
import connection from "./dbconnection.js";
//import defaultData from "./default.js";
import router from "./routes/route.js";
const app=express();


app.use(cors());
app.use(express.json());
app.use("/",router);

const URL =process.env.MONGODB_URI || "mongodb+srv://rraj58361:58361@cluster0.x3c4uqf.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;


connection(URL);

app.listen(PORT, () => {
    console.log("Listening at port  5000");
  });
  //defaultData();