# Kafka PoC
this is a poc of use case of kafka, where a mail-listener and http requests publish on topic in kafka and its handle and a api consumer and save in MongoDB.

### installation
make sure you has docker and docker-compose installed


### configuration
.env file on kafka-producer: 
PORT=3001
EMAIL=your-email@gmail.com
EMAIL_PASSWORD=
EMAIL_HOST=imap.gmail.com

the password you need to enter in [gmail](https://accounts.google.com/b/0/IssuedAuthSubTokens?hide_authsub=1) and create a app key to use.

### run

export HOST_IP=$(ifconfig | grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" | grep -v 127.0.0.1 | awk '{ print $2 }' | cut -f2 -d: | head -n1)

docker-compose up --build



### endpoints

GET http://localhost:3000/message
this should return all messages saves on mongodb

POST http://localhost:3001/message
{
    subject: 'example',
    body: 'example body'
}

this should publish on topic http_message and the consumer will save on mongodb.
