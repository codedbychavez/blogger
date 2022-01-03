import 'reflect-metadata';
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Post {
    @Field((type) => Int)
    id: number

    @Field()
    title: string

    @Field((type) => String, { nullable: true })
    content?: string

    @Field((type) => Boolean, { defaultValue: false })
    published: boolean

    @Field((type) => Int, { nullable: false })
    authorId: number
}