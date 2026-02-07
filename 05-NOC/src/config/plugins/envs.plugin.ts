import 'dotenv/config';

// lee las variables de entorno y las transforma al tipo de dato que queremos

import * as env from 'env-var';

export const envs = {
  PORT: env.get('PORT').required().asPortNumber(),
  MAILER_EMAIL: env.get('MAILER_EMAIL').required().asEmailString(),
  MAILER_SECRET_KEY: env.get('MAILER_SECRET_KEY').required().asString(),
  PROD: env.get('PROD').required().asBool(),
}