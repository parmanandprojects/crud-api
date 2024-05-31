import router from "express";
import { deleteUser, getAllUser, getSingleUser, registerUser, updateUser } from "../controllers/User.controller.js";

let userRoutes=router();
userRoutes.post("/add-user",registerUser)
userRoutes.get("/get-all-user",getAllUser)
userRoutes.post("/update-user/:id",updateUser)
userRoutes.delete("/delete-user/:id",deleteUser)
userRoutes.get("/get-single-user/:id",getSingleUser)

export {userRoutes}