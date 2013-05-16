var jf = require('jsonfile')
  , _file;

module.exports = {};

Object.defineProperty(
  module.exports,
  '_clean',
  {
    writable: false,
    enumerable: false,
    configurable: false,
    value: function() {
      for (var property in this) {
        if (this.hasOwnProperty(property)) {
          delete this[property];
        }
      }
    }
  }
);

Object.defineProperty(
  module.exports,
  '_set',
  {
    writable: false,
    enumerable: false,
    configurable: false,
    value: function(settings) {
      for (var property in settings) {
        if (!settings.hasOwnProperty(property)) {
          continue;
        }
        this[property] = settings[property];
      }
    }
  }
);

Object.defineProperty(
  module.exports,
  'load',
  {
    writable: false,
    enumerable: false,
    configurable: false,
    value: function(file, callback) {
      if (file) {
        _file = file;
      }
      this._clean();
      jf.readFile(_file, function(err, settings) {
        if (err) {
          return callback(err);
        }
        this._set(settings);
        callback(null);
      });
    }
  }
);

Object.defineProperty(
  module.exports,
  'loadSync',
  {
    writable: false,
    enumerable: false,
    configurable: false,
    value: function(file) {
      if (file) {
        _file = file;
      }
      this._clean();
      var settings = jf.readFileSync(_file);
      this._set(settings);
    }
  }
);

Object.defineProperty(
  module.exports,
  'save',
  {
    writable: false,
    enumerable: false,
    configurable: false,
    value: function(file, callback) {
      if (file) {
        _file = file;
      }
      jf.writeFile(_file, this, callback);
    }
  }
);

Object.defineProperty(
  module.exports,
  'saveSync',
  {
    writable: false,
    enumerable: false,
    configurable: false,
    value: function(file) {
      if (file) {
        _file = file;
      }
      jf.writeFileSync(_file, this);
    }
  }
);