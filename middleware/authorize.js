
export function authorizeModification(req,res,next){
/* if (req.user.role !== "parent"||(req.user.role!=="child"&&req.params.userId!==req.user.id)) {
      return res.status(403).json({ message: "Access denied" });
    } */
   if (req.params.userId==1) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
}



