import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import {MongooseModule} from "@nestjs/mongoose";
import { DialogsModule } from './dialogs/dialogs.module';
import { MessagesModule } from './messages/messages.module';

@Module({
    controllers: [AppController],
    providers: [],
    imports: [
        MongooseModule.forRoot('mongodb+srv://root:Fite456mn@cluster0.fh3vb.mongodb.net/untitledmessenger?retryWrites=true&w=majority'),
        DialogsModule,
        MessagesModule,
        AuthModule
    ]
})
export class AppModule {}
