import * as MailListener from 'mail-listener2';
import * as process from "process";
import {sendEmailMessage} from "./message.service";
import {MessageDto} from "./message.dto";
import {validate} from "class-validator";

const mailListener = new MailListener({
    username: process.env.EMAIL,
    password: process.env.EMAIL_PASSWORD,
    host: process.env.EMAIL_HOST || 'imap.gmail.com', // Update this to your email provider's IMAP server
    port: 993,
    tls: true,
    connTimeout: 10000,
    authTimeout: 5000,
    debug: console.log,
    tlsOptions: {rejectUnauthorized: false},
    mailbox: 'INBOX', // The mailbox to monitor for new emails
    searchFilter: ['UNSEEN'], // Filter only unread emails
    markSeen: true,
    fetchUnreadOnStart: true,
});

mailListener.start();

mailListener.on('server:connected', () => {
    console.log('Mail listener connected');
});

mailListener.on('mail', async (mail): Promise<void> => {
    // This event will be triggered when a new email is received

    const {subject, text, html} = mail;
    try {
        const messageDto = new MessageDto();
        messageDto.subject = subject;
        messageDto.body = text || html;
        await validate(messageDto)
        await sendEmailMessage(messageDto)
        console.log('email to kafka')
    } catch (error) {
        console.error(error)
    }
});

mailListener.on('error', (err) => {
    console.error('Mail listener error:');
});
