import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";


export class LogRepositoryImpl implements LogRepository {
  constructor(
    // inyeccion de dependencias, objetivo es que se pueda cambiar de data source sin afectar el codigo
    private readonly logDataSource: LogDataSource
  ) {}

  async saveLog( log: any ): Promise<void> {
    return this.logDataSource.saveLog( log );
  }

  async getLogs( severityLevel: LogSeverityLevel ): Promise<any> {
    return this.logDataSource.getLogs( severityLevel );
  }
}