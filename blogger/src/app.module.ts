import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
      debug: true,
      playground: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, PostService, PostResolver],
})
export class AppModule {}
