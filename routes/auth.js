import express from "express"
import bcrypt from "bcryptjs";
import { findByUsername, generateId,getUsers,saveUsers} from "../utils/db_users.js";
import {blacklistToken} from "../utils/token_blacklist.js";

import jwt from "jsonwebtoken";
import {randomUUID} from "crypto";

import { authenticate } from "../middleware/authenticate.js";
import { needToLogin } from "../middleware/needToLogin.js";











const router=express.Router()


router.get("/profile", async(req,res)=>{
        res.json("hello friend")
        
})
//REGISTRATION-----------------------------------------------------------------------------------------------------

router.post("/register",async (req,res)=>{
    const {username,password}=req.body;
    if(!username||!password){
        return res.status(400).json({message:"Email and password are required"})  
    }

const userExist= await findByUsername(username);
    if(userExist){
        return res.status(409).json({message:"Username already in use"})
    }

   
    const passwordHash=await bcrypt.hash(password,10);


    const id= await generateId();
    const {role}=req.body


const user={
    id: id,
    username: username,
    role: role,
    passwordHash:passwordHash
  }

const users= await getUsers();
users.push(user);
await saveUsers(users);
res.json("You successfully registered")
})









//LOGIN-----------------------------------------------------------------------------------------------------

router.post("/login", needToLogin, async (req, res) => {
  


 

    const { username, password } = req.body;
   
    

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }




    const user = await findByUsername(username);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
   

const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }



const payload = {
      id: user.id,
      role: user.role
    }
const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1d' });

    res.status(200).json({ message: "User login successfully", token });

});
//-----------------------------------------------------------------------------------------------------------------

//LOGOUT-----------------------------------------------------------------------------------------------------

router.post("/logout",(req,res)=>{
   
    const authHeader=req.headers.authorization;
    const token= authHeader.split(" ")[1]
    blacklistToken(token);
    res.json({message:"Logged out successfully"})


})






export default router;