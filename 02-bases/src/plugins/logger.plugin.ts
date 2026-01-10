import winston, { format } from 'winston';

const { combine, timestamp, json } = winston.format;

export const logger = winston.createLogger({
    level: 'info',
    // format: winston.format.json(),
    // de esta manera agregamos timestamp en el log de error
    format: combine(
        timestamp(),
        json(),
    ),
    // defaultMeta: { service: 'user-service' },
    transports: [
          new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// falta comprobar si esta en produccion o si no, de esta manera se imprime en pantalla el resultado
logger.add(new winston.transports.Console({
    format: winston.format.simple(),
}));

// module.exports = function buildLogger(service) {
export const buildLogger = ( service: string ) => {
    return {
        log: (message: string) => {
            // service  para saber en que archivo esta sucediendo el problema
            logger.log('info', {message, service})
        },
        error: (message: string) => {
            logger.error('error', {
                message,
                service,
                // agregamos fecha a el error
                at: new Date().toISOString(),
            });
        }
    }
}