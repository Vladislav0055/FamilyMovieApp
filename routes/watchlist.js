import express from "express"

const router=express.Router()


router.post("/:userId", async (req, res) => {
 res.json("You have requested a movie")
});







export default router