import {Module} from '@nestjs/common';
import {MessagesModule} from './domains/messages/messages.module';
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot('mongodb://mongodb:27017/jobcity'),
        MessagesModule
    ],
    providers: [],
})
export class AppModule {
}
