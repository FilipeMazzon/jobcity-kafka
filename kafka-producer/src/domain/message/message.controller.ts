import {Request, Response} from "express";
import {sendHttpMessage} from "./message.service";

export const postMessage = async (req: Request, res: Response): Promise<void> => {
    try {
        const {subject, body} = req.body;
        await sendHttpMessage(subject, body);
        res.status(200).send('message to queue');
    } catch (e) {
        res.status(400).send(e);
    }
}