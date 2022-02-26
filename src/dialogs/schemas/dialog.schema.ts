import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import {Document} from 'mongoose'

export type DialogDocument = Dialog & Document

@Schema()
export class Dialog {
    @Prop()
    user1_id: number

    @Prop()
    user2_id: number
}

export const DialogSchema = SchemaFactory.createForClass(Dialog)