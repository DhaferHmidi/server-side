import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
require('dotenv').config();
import { DatabaseModule } from './dataBase//database.module';
import { UserModule } from './user/user.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { BlogsModule } from './blogs/blogs.module';
import { EventsModule } from './events/events.module';
import { CoachsModule } from './coachs/coachs.module';
import { GymsModule } from './gyms/gyms.module';
import { PostsModule } from './posts/posts.module';
import { RecipesModule } from './recipes/recipes.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    name:'default',
    type:'postgres',
    host:process.env.POSTGRES_HOST,
    port:process.env.PORT,
    username:process.env.POSTGRES_USER,
    password:process.env.POSTGRES_PASSWORD,
    database:process.env.POSTGRES_DB,
    synchronize: true,
    logging:true,
    dropSchema:false,
    entities: ["dist/**/*.entity{.ts,.js}"],
  
  }), UserModule, RestaurantsModule, BlogsModule, EventsModule, CoachsModule, GymsModule, PostsModule, RecipesModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
