import {Request, Response} from "express";
import {sendHttpMessage} from "./message.service";
import {MessageDto} from "./message.dto";
import {validate} from "class-validator";

export const postMessage = async (req: Request, res: Response): Promise<void> => {
    try {
        const {subject, body} = req.body;

        const messageDto = new MessageDto();
        messageDto.subject = subject;
        messageDto.body = body;
        await validate(messageDto);
        await sendHttpMessage(messageDto);
        res.status(200).send('message to queue');
    } catch (e) {
        res.status(400).send(e);
    }
}