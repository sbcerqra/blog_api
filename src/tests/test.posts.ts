import authorController from "../controllers/authorController";
import { createAuthor } from "../services/author";
import { createPost } from "../services/posts";
// describe('testing post service', () => {
//     test('should create a post', () => {
//         let cats = {
//             title: "why cats are awesome",
//             authorId: 2,
//             content: "because they are",
//             published_date: 12/10/2000,
//             categoryId: 1,
//         }
//         createPost(cats)
//         expect("") 
//     });
// });


// describe('testing author service', () => {
//     test('should add an author'),() => {
//         let author = authorController();
//     }
//     expect()
// });

test("Initial test", () => {
    expect(2).toEqual(3);
 });