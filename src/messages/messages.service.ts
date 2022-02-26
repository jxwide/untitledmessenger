import { Injectable } from '@nestjs/common';
import {Messages, MessagesDocument} from "./schemas/messages.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export class MessagesService {
    constructor(@InjectModel(Messages.name) private messagesModel: Model<MessagesDocument>) {}

    async GetAllMessagesFromDialogById(did: number) : Promise<Messages[]>
    {
        try {
            const exists = await this.messagesModel.find({dialog_id: did}).exec()
            if (!exists) throw new Error('Сообщений нет')
            return exists
        } catch (e) {
            return e.message
        }
    }

    async AddNewMessageToDialogById(did: number, msg_text: string) : Promise<Messages>
    {
        try {
            const createdMessage = new this.messagesModel({dialog_id: did, message_text: msg_text})
            if (createdMessage.message_text.length == 0) throw new Error('Сообщение не должно быть пустым!')
            await createdMessage.save()
            return createdMessage
        } catch (e) {
            return e.message
        }
    }
}
