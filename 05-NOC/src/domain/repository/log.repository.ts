// llamar datasource, permitira llamar metodos de datasource

import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

// abstract class para que no se pueda instanciar, obligar comportamiento en otras clases
// como establecer un contratro donde cada datasource debe cumplir
export abstract class LogRepository {
  abstract saveLog( log: LogEntity ): Promise<void>;
  abstract getLogs( severityLevel: LogSeverityLevel ): Promise<LogEntity[]>
}