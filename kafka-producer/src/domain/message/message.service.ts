import {createBroker, sendMessage} from "../../infrastructure/adapter/kafka.adapter";
import {TopicsEnum} from "../../infrastructure/enums/topics.enum";
import {MessageDto} from "./message.dto";

export const sendHttpMessage = async (message: MessageDto): Promise<void> => {
    const kafka = createBroker();
    await sendMessage(kafka, TopicsEnum.http_messages, {
        subject: message.subject, body: message.body
    })
}

export const sendEmailMessage = async (message: MessageDto): Promise<void> => {
    const kafka = createBroker();
    await sendMessage(kafka, TopicsEnum.email_messages, {
        subject: message.subject, body: message.body
    })
}

