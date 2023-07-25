import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {

    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppModule,
        {
            transport: Transport.KAFKA,
            options: {
                client: {
                    brokers: ['kafka:9092'],
                },
                consumer: {
                    groupId: 'message-consumer',
                },
            },
        }
    );
    app.useGlobalPipes(new ValidationPipe({whitelist: true}));
    await app.listen();
}

bootstrap();
