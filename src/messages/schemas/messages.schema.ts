import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import {Document} from 'mongoose'

export type MessagesDocument = Messages & Document

@Schema()
export class Messages {
    @Prop({required: true})
    dialog_id: number

    @Prop()
    message_text: string
}

export const MessagesSchema = SchemaFactory.createForClass(Messages)