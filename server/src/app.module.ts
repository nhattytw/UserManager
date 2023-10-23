import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import config from './config/keys';
import { join } from 'path';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI),
    UserModule,

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, 
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  controllers: [],
  providers: [AppService, AppResolver],
})

export class AppModule {}
