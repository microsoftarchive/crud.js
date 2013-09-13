module.exports = (function () {

  'use strict';

  var utils = require('./utils');

  var backends = {
    'idb': require('./backends/idb'),
    'websql': require('./backends/websql'),
    'ajax': require('./backends/ajax')
  };

  function detectBackend () {
    for (var backend in backends) {
      if (backend.test()) {
        return backend;
      }
    }
  }

  function Database (options) {

    options = options || {};

    if (!options.name || !utils.isString(options.name)) {
      throw new TypeError('database needs a string name');
    }

    if (!options.version || !utils.isInteger(options.version)) {
      throw new TypeError('database needs a integral version number');
    }

    var backend = backends[options.backend] || detectBackend();
    if (!backend) {
      throw new Error('No storage backends available');
    }
  }

  return Database;

})();