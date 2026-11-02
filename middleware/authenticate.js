
import jwt from "jsonwebtoken"


function authenticate(req,res,next){
    const authHeader=req.headers.authorization;
    if(!authHeader||!authHeader.startsWith("Bearer ")){
      return res.status(401).json({ message: "No token provided" });
    }

  const token = authHeader.split(" ")[1];

  

  const decoded=jwt.verify(token, process.env.SECRET_KEY);
  if (!decoded) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }

  req.user = decoded;
  next();

}

export {authenticate}





