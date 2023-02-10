import { Posts } from "@prisma/client"

export interface Author {
    id: number,
    name: string
    works: Posts[]
}