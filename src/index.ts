import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import blogController from "./controllers/blogController";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
app.post("/blog/create", blogController.createBlogPost);
app.put("/update/:idposts", blogController.updateBlogPost);
app.get("/blog", blogController.findAll);
app.get("/blog/author/:author", blogController.findByAuthor);
app.delete("/blog/:idposts", blogController.deletePost);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`server is on. port ${PORT}`);
});
