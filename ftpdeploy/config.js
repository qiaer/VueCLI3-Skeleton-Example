const env = require('../config/env')

module.exports = {
  localBasePath: '/',
  remoteBasePath: env.serverPath,
  sync: [
    { src: "/dist", dest: "/" }
  ]
};
