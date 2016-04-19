# Pug HTML loader for webpack

## Installation

`npm install pug-html-loader`

## Usage

In your sources:

``` javascript
var json = require('file.jade')
// => returns file.jade content as html compiled string
```

In your karma.conf.js  file:

```javascript
module.exports = {
  // your config settings ...
  module: [
    //your modules...
    loaders: [{
      include: /\.jade$/,
      loader: 'pug-html-loader'
    }]
  ]
};
```

Don't forget to polyfill `require` if you want to use it in node.
See `webpack` documentation.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
