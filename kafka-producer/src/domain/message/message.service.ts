import {createBroker, sendMessage} from "../../infrastructure/adapter/kafka.adapter";
import {TopicsEnum} from "../../infrastructure/enums/topics.enum";

export const sendHttpMessage = async (subject: string, body: string): Promise<void> => {
    const kafka = createBroker();
    await sendMessage(kafka, TopicsEnum.http_messages, {subject, body})
}

export const sendEmailMessage = async (subject: string, body: string): Promise<void> => {
    const kafka = createBroker();
    await sendMessage(kafka, TopicsEnum.email_messages, {subject, body})
}

