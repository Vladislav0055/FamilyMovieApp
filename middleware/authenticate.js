// Authenticate with checking headers, blacklist of tokens,decoding token...
import jwt from "jsonwebtoken"
import { isBlacklisted } from "../utils/token_blacklist.js";

function authenticate(req,res,next){
    const authHeader=req.headers.authorization;
    if(!authHeader||!authHeader.startsWith("Bearer ")){
      return res.status(401).json({ message: "No token provided" });
    }

  const token = authHeader.split(" ")[1];


 if (isBlacklisted(token)) {
    return res
      .status(401)
      .json({ message: "Token has been invalidated. Log in again." });
  }

  
 try{
 const decoded=jwt.verify(token, process.env.SECRET_KEY);
  if (!decoded) {
    return res.status(401).json({ message: "Invalid or expired token" });

  }

  req.user = decoded;
  next();

 } catch(err){
  res.json({message:"Invalid or expired token"})
 }
 
 

 
}

export {authenticate}





