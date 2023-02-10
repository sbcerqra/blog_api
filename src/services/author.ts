import addAuthor from "../models/dto/addAuthor";
import client from "../utils/client";
export async function findAuthorById(id:number) {
  const author = await client.author.findUnique({
    where: { id },
  });
  return author;
}
export async function createAuthor(data: addAuthor) {
  const author = await client.author.create({
    data: {
     name: data.name,
    },
  });
  return author;
}
export async function deleteAuthorById(id: number) {
  const author = await client.author.delete({
    where: { id },
  });
  return author;
}
