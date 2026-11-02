
import jwt from "jsonwebtoken"


function needToLogin(req,res,next){
    const authHeader=req.headers.authorization;
    if(!authHeader||!authHeader.startsWith("Bearer ")){

      next();
    }

  const token = authHeader.split(" ")[1];

  try{
    const decoded=jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      
    next()
  }
  return res.json({message:"You don't need to login. You have logged in."})
  }
  catch{
  
    next()
  } 

}



export {needToLogin}