import {Injectable} from '@nestjs/common';
import {CreateMessageDto} from './dto/create-message.dto';
import {MessagesRepository} from "./messages.repository";
import {MessageDocument} from "./message.schema";

@Injectable()
export class MessagesService {

  constructor(
      private readonly messagesRepository: MessagesRepository,
  ) {}
  async create(createMessageDto: CreateMessageDto): Promise<void> {
    await this.messagesRepository.insertOne(createMessageDto)
  }

  async findAll(): Promise<MessageDocument[]> {
    return this.messagesRepository.findAll();
  }
}
