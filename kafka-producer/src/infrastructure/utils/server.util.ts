/**
 * Normalize a port into a number, string, or false.
 */
export const normalizePort = (val: any) => {
    const port: number = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

/**
 * Event listener for HTTP server "listening" event.
 */
export const onListening = (addr: any) => {
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : +addr.port;
    console.log(`server listening in port:${bind} on worker :${process.pid}`);
};

/**
 * Event listener for HTTP server "error" event.
 */
export const onError = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error('the port is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
};