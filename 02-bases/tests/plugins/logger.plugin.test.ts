import { buildLogger, logger as winstonLogger } from "../../src/plugins/logger.plugin.js";
import { jest } from "@jest/globals";

describe( 'plugins/logger.plugin.ts', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Limpia el historial de llamadas entre un test y otro
    });

    test('buildLogger should return a function logger', () => {
        const logger = buildLogger('test');
    
        expect( typeof logger.log ).toBe('function')
        expect( typeof logger.error ).toBe('function');
    })

    test('logger.log should log a message', () => {
        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
        const message = 'test message';
        const service = 'test service';

        const logger = buildLogger(service);

        logger.log(message);

        expect( winstonLoggerMock ).toHaveBeenCalledWith(
            'info',
            // objeto que tenga minimo esta configuracion
            expect.objectContaining(
                {
                    level: 'info',
                    message,
                    service,
                }
            )
        );
    })

    test(' logger.error should log an error ', () => {
        // Un Mock es un "simulacro". Es un objeto que reemplaza a una función o módulo real para que puedas controlar su comportamiento y observar cómo se interactúa con él.
        const winstonErrorMock = jest.spyOn(winstonLogger, 'error');
        const message = 'test error message';
        const service = 'test service';

        // creamos el logger con el mensaje de service
        const logger = buildLogger(service);
        
        // lanzamos el mensaje de error en el logger
        logger.error(message);

        // Se espia el mensaje que es enviado de la funcion logger hacia winston, donde debe contener la estructura de objeto de abajo, ade,as object containing dice no importa que mas tenga quiero saber si contiene los elementos que paso como parametros
        expect( winstonErrorMock ).toHaveBeenCalledWith(
            'error',
            expect.objectContaining({
                message,
                service,
            })
        )
    })
    // error: (message: string) => {
    //         logger.error('error', {
    //             message,
    //             service,
    //             // agregamos fecha a el error
    //             at: new Date().toISOString(),
    //         });
    //     }
})