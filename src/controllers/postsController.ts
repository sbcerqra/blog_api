import { createPost, updatePost, deletePostById, findAllPosts, findPostByAuthor } from "../services/posts";
import { Request, Response } from "express"

class postsController {
    createBlogPost = async (req:Request, res:Response) => {
        try {
          createPost(req.body);
          res.status(200).send("Post created.");
        } catch (error) {
          console.log(error);
        }
      };
    
      updateBlogPost = async (req:Request, res:Response) => {
        try {
          const { idposts } = req.params;
          if (idposts == null) {
            res.status(404).send("No id was given.");
          }
          updatePost(req.body, parseInt(idposts))
          res.status(200).send("Post updated");
        } catch (error) {
          console.log(error);
        }
      };
    
      deletePost = async (req:Request, res:Response) => {
        const { idposts } = req.params;
        const response = await deletePostById(parseInt(idposts));
        if (response == null) {
          res.status(404).send("There are no posts with that id.");
        }
        res.status(200).send("Post deleted");
      };
    
      findAll = async (req:Request, res:Response) => {
        const response = await findAllPosts();
        if (response == null) {
          res.status(404).send("There are no posts");
        }
        res.status(200).send(response);
      };
      
      findByAuthor = async (req:Request, res:Response) => {
        const { authorId } = req.params;
        const response = await findPostByAuthor(parseInt(authorId));
        if (response == null) {
          res.status(404).send("There are no posts under this author's name");
        }
        res.status(200).send(response);
      };
    }
    export default new postsController();