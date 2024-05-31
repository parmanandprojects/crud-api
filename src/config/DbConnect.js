import mongoose from "mongoose";

const DbConnect=()=>{
    try{
        // mongoose.connect("mongodb+srv://parmanandkumawat:abhipri94@cluster0.daklven.mongodb.net/test-crud")
        mongoose.connect("mongodb+srv://parmanandkumawat:abhipri94@cluster0.daklven.mongodb.net/test-crud");
console.log("db connect")
    }catch(err){
        console.log("DBError",err?.message)
    }
}

export default DbConnect