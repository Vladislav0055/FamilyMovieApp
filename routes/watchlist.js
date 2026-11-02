import express from "express"

const router=express.Router()


router.get("/:userId", async (req, res) => {
 res.json({message:"You have requested a movie"})
});



export default router