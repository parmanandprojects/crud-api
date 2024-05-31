import express, { json } from "express"
import DbConnect from "./src/config/DbConnect.js";
import { userRoutes } from "./src/routes/userRoutes.js";
import cors from "cors";


const app=express();
app.use(cors());

app.use(express.json())
DbConnect();

app.use("/api/user",userRoutes)


app.listen(4000,()=>{console.log("server running on 4000")})