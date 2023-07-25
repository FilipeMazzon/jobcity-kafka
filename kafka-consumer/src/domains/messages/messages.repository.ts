import {MongoCollectionEnum} from "../../infrastructure/enums/mongoCollection.enum";
import {Injectable} from "@nestjs/common";
import {BaseMongoRepository} from "../../infrastructure/helpers/baseMongo.repository";
import {Message} from "./message.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export class MessagesRepository extends BaseMongoRepository<Message> {
    constructor(
        @InjectModel(MongoCollectionEnum.messages)
        private readonly messageModel: Model<Message>,
    ) {
        super(messageModel);
    }
}
