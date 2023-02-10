import { Author, Category } from "@prisma/client";

export default interface add {
    title: string;
    content: string;
    authorId: number;
    published_date: Date;
    categoryId: number;
  }
  