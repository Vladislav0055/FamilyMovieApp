import express from "express"
import { readWatchlists } from "../utils/db.js";
import { addMovie, updateMovie, deleteMovie} from "../utils/db.js";
import { getWatchlist } from "../utils/db.js";
const router=express.Router()


router.get("/", async (req, res) => {
const watchlist=getWatchlist(req.user.id)

 return res.status(200).json(watchlist)
});




router.post("/addmovie", async (req, res) => {
   try{
addMovie(req.user.id,req.body)
   }  catch{
    return res.json({message:"something  went wrong"})
   }


 return res.status(201).json({message:"movie added to watchlist"})


});


router.put("/updatemovie", async (req, res) => {
   try{
const result=updateMovie(req.user.id, req.body.id, req.body.updates)
if(result===null){
    return res.json({message:"no such movie for this user"})
}
   }  catch{
    return res.json({message:"something  went wrong"})
   }


 return res.status(201).json({message:"movie updated"})


});




router.delete("/deletemovie/:movieId", async (req, res) => {
    
 //  try{
const result=deleteMovie(req.user.id, +req.params.movieId)
if(result===null){
    return res.json({message:"no such movie for this user",userId:req.user.id,movieId:req.params.movieId})
//}
   }  /* catch{
    return res.json({message:"something  went wrong"})
   }
 */

 return res.status(201).json({message:"movie deleted"})


});


export default router

