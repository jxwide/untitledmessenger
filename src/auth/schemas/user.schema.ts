import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import {Document} from 'mongoose'

export type UserDocument = User & Document

@Schema()
export class User {
    @Prop({required: true})
    email: string

    @Prop({required: true})
    password: string

    @Prop({required: false})
    name: string
}

export const UserSchema = SchemaFactory.createForClass(User)