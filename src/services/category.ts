import addCategory from "../models/dto/addCategory";
import client from "../utils/client"

export async function createCategory(data: addCategory) {
    const author = await client.category.create({
      data: {
       name: data.name,
       style: data.style,
      },
    });
    return author;
  }
  