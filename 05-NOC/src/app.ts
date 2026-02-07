import { envs } from "./config/plugins/envs.plugin";
import { Server } from "./presentation/server";
// import 'dotenv/config';

// dotenv permite acceder a las variables de entorno de archivo .env hacia un objeto global process.env

( async() => {
  main();
})();

function main() {
  // Server.start();
  // console.log({mail: process.env.Mailer_Email})
  // console.log({password: process.env.MAILER_SECRET_KEY})
  // console.log({port: process.env.Port})
  console.log( envs.PORT );
  console.log( envs.MAILER_EMAIL );
  console.log( envs.MAILER_SECRET_KEY );
  console.log( envs.PROD );
}