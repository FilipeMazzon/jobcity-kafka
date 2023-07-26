import {Controller, Get} from '@nestjs/common';
import {EventPattern, Payload} from '@nestjs/microservices';
import {MessagesService} from './messages.service';
import {CreateMessageDto} from './dto/create-message.dto';
import {MessageDocument} from "./message.schema";

@Controller('/message')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @EventPattern('email_messages')
  handleEmailMessages(@Payload() createMessageDto: CreateMessageDto): Promise<void> {
    return this.messagesService.create(createMessageDto);
  }

  @EventPattern('http_messages')
  handleHttpMessages(@Payload() createMessageDto: CreateMessageDto): Promise<void> {
    return this.messagesService.create(createMessageDto);
  }

  @Get('/')
  async getMessages(): Promise<MessageDocument[]> {
    return this.messagesService.findAll();
  }
}
