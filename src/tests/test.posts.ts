import authorController from "../controllers/authorController";
import { createAuthor } from "../services/author";
import { createPost } from "../services/posts";
describe('testing author service', () => {
    test('should add an author'),() => {
        let author = { name: "sarah" }
        createAuthor(author)
    }
    expect(authorController).toBeCalled()
});

test("Initial test", () => {
    expect(2).toEqual(3);
 });