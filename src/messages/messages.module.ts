import { Module } from '@nestjs/common';
import {Messages, MessagesSchema} from "./schemas/messages.schema";
import {MessagesService} from "./messages.service";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    providers: [MessagesService],
    imports: [
        MongooseModule.forFeature([
            {name: Messages.name, schema: MessagesSchema}
        ])
    ]
})
export class MessagesModule {}
