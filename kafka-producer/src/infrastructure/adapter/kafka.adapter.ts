import {Kafka, logLevel, ProducerRecord} from "kafkajs";

export const createBroker = () => {
    return new Kafka({
        logLevel: logLevel.DEBUG,
        clientId: 'jobcity',
        brokers: ['kafka:29092']
    })
}

export const sendMessage = async (kafka: Kafka, topic: string, message: Object): Promise<void> => {
    const producer = kafka.producer();
    await producer.connect();
    const send: ProducerRecord = {
        topic,
        messages: [{value: JSON.stringify(message)}]
    }
    console.log(send);
    await producer.send(
        send
    )

    await producer.disconnect();
}