// origen de datos, clase abstracta o interfaz en domain, reglas de negocio de como se quiere que funcione

import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

// abstract class para que no se pueda instanciar, obligar comportamiento en otras clases
// como establecer un contratro donde cada datasource debe cumplir
export abstract class LogDataSource {
  abstract saveLog( log: LogEntity ): Promise<void>;
  abstract getLogs( severityLevel: LogSeverityLevel ): Promise<LogEntity[]>
}