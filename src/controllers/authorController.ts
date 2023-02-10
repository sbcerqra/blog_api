import { Request, Response } from "express"
import { createAuthor, deleteAuthorById } from "../services/author";

class authorController {
    addAuthor = async (req:Request, res:Response) => {
        try {
          createAuthor(req.body);
          res.status(200).send("Author added to the database.");
        } catch (error) {
          console.log(error);
        }
      };
    deleteAuthor = async (req:Request, res:Response) => {
     try {
        const { authorId } = req.params;
        const response = await deleteAuthorById(parseInt(authorId));
        if (response == null) {
          res.status(404).send("There are no posts with that id.");
        }
        res.status(200).send("Post deleted");
     } catch (error) {
        console.log(error);
      }
    }
}
    export default new authorController();