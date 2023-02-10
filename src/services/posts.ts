import client from "../utils/client";
import add from "../models/dto/add";

export async function findPostByAuthor(authorId: number) {
    const post = await client.posts.findMany({
      where: { authorId },
    });
    return post;
  }
  export async function deletePostById(id: number) {
    const post = await client.posts.delete({
      where: { id },
    });
    return post;
  }
  export async function findAllPosts() {
    const post = await client.posts.findMany();
    return post;
  }
  export async function createPost(data: add) {
    const post = await client.posts.create({
      data: {
        title: data.title,
        authorId: data.authorId,
        content: data.content,
        published_date: new Date(data.published_date),
        categoryId: data.categoryId,
      },
    });
    return post;
  }
  export async function updatePost(data: add, id: number) {
    const blog = await client.posts.update({
      where: {
        id,
      },
      data: {
        title: data.title,
        authorId: data.authorId,
        content: data.content,
        published_date: new Date(data.published_date),
        categoryId: data.categoryId,
      },
    });
    return blog;
  }
  