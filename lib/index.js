/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Williams Medina @willyelm
*/
'use strict';

const util = require('loader-utils');
const pug = require('pug');

module.exports = function(source) {
  if (this.cacheable) {
    this.cacheable(true);
  }

  // loader pipe defined options
  let query = util.parseQuery(this.query);

  // default compiler options
  var options = {
    filename: this.resourcePath,
    doctype: query.doctype || 'js',
    compileDebug: this.debug || false
  };

  // apply loader options to defualt options
  options = Object.assign(options, query);

  // prepare template function
  let template = pug.compile(source, options);

  // compile template
  return template(query);
};

