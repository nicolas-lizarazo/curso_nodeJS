// presentation, porque el cron se encarga de mostrar el log al usario

import { CronJob } from "cron";

type CronTime = string | Date;
type OnTick = () => void;

export class CronService {
  static createJob( cronTime: CronTime , onTick: OnTick ): CronJob {
    const job = new CronJob( cronTime, onTick );

    // start es un metodo de cron
    job.start();

    return job;
  }
}

// CronTime es el tiempo en el que se va a ejecutar el job, OnTick es el metodo que se va a ejecutar
//   const job = new CronJob(
    //   '*/2 * * * * *', // cronTime
    //   function () {
    //     console.log('You will see this message every second');
    //   }, // onTick
    // );


    // const job = new CronJob(
    //   '*/3 * * * * *', // cronTime
    //   () => {
    //     const date = new Date();
    //     console.log('You will see this message every 3 second', date);
    //   }, // onTick
    // );