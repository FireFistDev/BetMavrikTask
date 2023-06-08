import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

console.log('yler');

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://akaki7600:Hanway123@cluster5.xu4itzt.mongodb.net/',
    ),
    UsersModule,
  ],
})
export class AppModule {}
