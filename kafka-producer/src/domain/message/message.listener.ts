import * as MailListener from 'mail-listener2';
import * as process from "process";
import {sendEmailMessage} from "./message.service";

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

mailListener.on('mail', (mail): void => {
    // This event will be triggered when a new email is received
    console.log('New email received:');
    const {subject, text} = mail;

    sendEmailMessage(subject, text)
        .then(() => {
            console.log('email to kafka')
        })
        .catch(err => {
            console.error(err);
        });
    // You can process the email here, e.g., extract the subject, body, sender, etc.
});

mailListener.on('error', (err) => {
    console.error('Mail listener error:');
});
