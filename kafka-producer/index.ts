import * as http from 'http';
import app from './app';

//this is to start listening the emails forever.
import './src/domain/message/message.listener';

import {onError, onListening, normalizePort} from './src/infrastructure/utils/server.util';

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '8080');
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', () => {
    onListening(server.address())
});

