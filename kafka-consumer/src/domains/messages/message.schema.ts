import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema({
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Message {
    @Prop({ required: true })
    subject: string;

    @Prop({ required: true })
    body: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);