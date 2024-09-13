const express=require("express");
const usercontroller=require("../controllers/usercontroller");
const router=express.Router();
router.get("/users",(req,res)=>{
    usercontroller.getAllUsers(req,res)
})
router.get("/users/:id",(req,res)=>{
    usercontroller.getUsers(req,res)
})
module.exports=router;