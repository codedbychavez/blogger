import 'reflect-metadata'
import { Inject} from "@nestjs/common";
import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { Post } from "./post.model";
import { PrismaService } from "./prisma.service";

@Resolver(Post)
export class PostResolver {
    constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

    @Query((returns) => Post, { nullable: true })
    async postById(@Args('id') id: number) {
        return this.prismaService.post.findUnique({
            where: { id },
        })
    }

    }