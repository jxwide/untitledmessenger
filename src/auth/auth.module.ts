import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./schemas/user.schema";
import {JwtModule} from "@nestjs/jwt";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
      MongooseModule.forFeature([
        {name: User.name, schema: UserSchema}
      ]),
      JwtModule.register({
          secret: 'n12x6ba6bxb1x3612',
          signOptions: {expiresIn: '2h'}
      })
  ]
})
export class AuthModule {}
