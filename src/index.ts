import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import postsController from "./controllers/postsController";
import authorController from "./controllers/authorController";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
app.post("/blog/create", postsController.createBlogPost);
app.put("/update/:idposts", postsController.updateBlogPost);
app.get("/blog", postsController.findAll);
app.get("/blog/author/:author", postsController.findByAuthor);
app.delete("/blog/:idposts", postsController.deletePost);
app.post("/author/add", authorController.addAuthor);
app.delete("/author/:authorId", authorController.deleteAuthor);


const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`server is on. port ${PORT}`);
});
