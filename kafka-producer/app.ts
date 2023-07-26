import * as express from "express";
import * as dotenv from 'dotenv'
import * as cors from 'cors';
import MessageRouter from "./src/domain/message/message.router";

dotenv.config();

const app: express.Express = express();

//middlewares
app.use(cors());

app.use(express.json());

app.use('/message', MessageRouter);

export default app;