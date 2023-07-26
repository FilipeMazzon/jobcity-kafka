import {Kafka, logLevel} from "kafkajs";

export const createBroker = () => {
    return new Kafka({
        logLevel: logLevel.DEBUG,
        clientId: 'jobcity',
        brokers: ['kafka:9092']
    })
}


export const sendMessage = async (kafka: Kafka, topic: string, message: Object): Promise<void> => {
    const producer = kafka.producer();
    await producer.connect();
    await producer.send({
        topic,
        messages: [{value: JSON.stringify(message)}]
    })

    await producer.disconnect();
}