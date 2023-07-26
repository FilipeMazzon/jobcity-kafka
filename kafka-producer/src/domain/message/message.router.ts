import {Router} from "express";

const router: Router = Router();
import {postMessage} from './message.controller';

/* GET home page. */
router.get('/', postMessage);

export default router;