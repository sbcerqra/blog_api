import client from "../utils/client";
export async function findAuthorById(id) {
  const author = await client.author.findUnique({
    where: { id },
  });
  return author;
}
