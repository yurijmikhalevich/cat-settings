# cat-settings

Simple settings module for node.js, providing simple API to access and modify application settings, stored in JSON-file.
Uses jsonfile module.

JSON-file should store an object.

Installation:

```bash
$ npm install cat-settings
```

Example:

```javascript
var settings = require('cat-settings');
settings.loadSync(__dirname + '/settings.json');

// You may also use async load if it makes sense
settings.load(null, function(err) {
  if (err) {
    // ...
  }
});

app.set('port', settings.app.port);

// ...

settings.cat = {};
settings.cat.name = 'Leopold';
settings.saveSync();

// You may also use async save if it makes sense
settings.save(null, function(err) {
  if (err) {
    // ...
  }
});
```

When you pass file argument to load or save methods, you also change file, where settings are stored, in most cases
you should pass it only when you call load first time.

After, you can require cat-settings whenever you want and access parameters, without calling load.