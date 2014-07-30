/**
 * @license MIT
 * @author 0@39.yt (Yurij Mikhalevich)
 */
var jf = require('jsonfile');
var _file;

module.exports = {};

Object.defineProperty(
  module.exports,
  '_clean',
  {
    writable: false,
    enumerable: false,
    configurable: false,
    /**
     * Cleans all settings properties without saving
     */
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
    /**
     * Sets all object properties to same in settings without cleaning and
     * saving
     * @param {Object} settings
     */
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
    /**
     * Asynchronously loads object from JSON file
     * @param {String} [file]
     * @param {Function} callback
     */
    value: function(file, callback) {
      var that = this;
      if (file) {
        _file = file;
      }
      this._clean();
      jf.readFile(_file, function(err, settings) {
        if (err) {
          return callback(err, null);
        }
        that._set(settings);
        callback(null, that);
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
    /**
     * Synchronously loads object from JSON file
     * @param {String} [file]
     * @returns {Object}
     */
    value: function(file) {
      if (file) {
        _file = file;
      }
      this._clean();
      var settings = jf.readFileSync(_file);
      this._set(settings);
      return this;
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
    /**
     * Asynchronously saves object to JSON file
     * @param {String} [file]
     * @param {Function} callback
     */
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
    /**
     * Synchronously saves object to JSON file
     * @param {String} [file]
     */
    value: function(file) {
      if (file) {
        _file = file;
      }
      jf.writeFileSync(_file, this);
    }
  }
);
