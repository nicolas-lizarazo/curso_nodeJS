// archivo de barril, index primer archivo a buscar en carpeta de pluggins

export { getAge } from './get-age.plugin.js';
export { getUUID} from './get-id.plugin.js';
export { httpClientPlugin as httpClient } from './http-client.plugin.js';
export { buildLogger } from './logger.plugin.js';

// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const { http } = require('../plugins/http-client.plugin');
// const buildLogger = require('../plugins/logger.plugin');
// module.exports = {
//     getAge,
//     getUUID,
//     http,
//     buildLogger,
// }