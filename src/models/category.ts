import { Posts } from "@prisma/client";

export interface Category {
    id: number,
    name: string,
    style: string,
    posts: Posts[]
}