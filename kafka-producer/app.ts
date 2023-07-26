
import * as express from "express";
import * as dotenv from 'dotenv'
import * as cors from 'cors';
dotenv.config();

const app: express.Express = express();

//middlewares
app.use(cors());

app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Express + TypeScript Server');
});



export default app;