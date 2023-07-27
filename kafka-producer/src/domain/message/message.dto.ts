import {IsNotEmpty, IsString} from "class-validator";

export class MessageDto {
    @IsString()
    @IsNotEmpty()
    subject: string;

    @IsString()
    @IsNotEmpty()
    body: string;
}