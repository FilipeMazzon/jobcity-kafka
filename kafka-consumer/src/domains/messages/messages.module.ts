import {Module} from '@nestjs/common';
import {MessagesService} from './messages.service';
import {MessagesController} from './messages.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {MongoCollectionEnum} from "../../infrastructure/enums/mongoCollection.enum";
import {MessageSchema} from "./message.schema";
import {MessagesRepository} from "./messages.repository";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: MongoCollectionEnum.messages,
                schema: MessageSchema,
            },
        ]),
    ],
    controllers: [MessagesController],
    providers: [MessagesService, MessagesRepository]
})
export class MessagesModule {
}
