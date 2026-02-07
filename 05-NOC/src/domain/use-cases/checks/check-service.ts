// caso de uso codigo especializado en una tarea

// caso de uso: logica de negocio => repository => datasource

import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

type SuccessCallback = (() => void) | undefined;
type ErrorCallback = (( error: string) => void) | undefined;

// inyeccion de dependencias es inyectar una independencia en casos de uso o repositorio o cualquier cosa.
// normalmente se inyecta en el constructor de la clase. Esto significa que la clase depende de la dependencia.
export class CheckService implements CheckServiceUseCase {
  constructor(
    private readonly logRepository: LogRepository,
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback
  ) {}

  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch( url );
      if ( !req.ok ) {
        throw new Error(`Error on check service ${url}`);
      }  

      // si todo funciona no es critico
      const log = new LogEntity( `Service ${url} working`, LogSeverityLevel.high );
      this.logRepository.saveLog( log );
      this.successCallback && this.successCallback();

      return true;
    } catch ( error ) {
      const errorMessage = ` ${ url } is not ok: ${ error }`;
      const log = new LogEntity( errorMessage, LogSeverityLevel.high );
      this.logRepository.saveLog( log );

      this.errorCallback && this.errorCallback( errorMessage );

      return false;
    }
  }
}