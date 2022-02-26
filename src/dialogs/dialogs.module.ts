import { Module } from '@nestjs/common';
import { DialogsController } from './dialogs.controller';
import { DialogsService } from './dialogs.service';
import {MessagesService} from "../messages/messages.service";
import {MongooseModule} from "@nestjs/mongoose";

import {Messages, MessagesSchema} from "../messages/schemas/messages.schema";
import {Dialog, DialogSchema} from "./schemas/dialog.schema";

@Module({
    controllers: [DialogsController],
    providers: [DialogsService, MessagesService],
    imports: [
        MongooseModule.forFeature([
            {name: Messages.name, schema: MessagesSchema},
            {name: Dialog.name, schema: DialogSchema}
        ])
    ]
})
export class DialogsModule {}
