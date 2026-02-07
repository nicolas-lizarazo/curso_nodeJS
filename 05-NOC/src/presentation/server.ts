
import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.implementation";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDataSource()
)

export class Server {
  public static start() {
    console.log("Server started");

    // Crone hace la misma labor de timer, solo que se ejecuta de manera automatica y es mas sencillo de configurar
    CronService.createJob(
      '*/5 * * * * *', // cronTime
      () => {
        // si se crea un servidor por ejemplo con json server
        // new CheckService().execute('http://localhost:3000/comments');
        const url = 'http://localhost:3000';
        new CheckService(
          fileSystemLogRepository,
          () => console.log(`${url} is ok`),
          ( error ) => console.log(error)
        ).execute( url );
      } // onTick
    );
  }
}

// presionar . en git hub y se abre vsc en el navegador