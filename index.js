
import express from "express";
import helmet from "helmet";
import authRouter from "./routes/auth.js"
import { authenticate } from "./middleware/authenticate.js";
import watchlistRoutes from "./routes/watchlist.js";
import {authorizeModification} from "./middleware/authorize.js";

const PORT = process.env.PORT;
const app = express();

app.use(helmet());
app.use(express.json());
app.use("/api/auth",authRouter)
app.use("/api/watchlist",authenticate, watchlistRoutes);


app.get("/whoami",authenticate, (req, res) => {
  res.json(req.user);

});

app.get("/", (req, res) => {
  res.json({message:"Family Movie Watchlist API"});
 //res.send("Family Movie Watchlist API")
});

app.post("/hello/:userId",authenticate,authorizeModification,(req,res)=>{
  res.json(req.user)
  console.log(req.body)
})






app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
