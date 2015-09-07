'use strict';

var fs = require('fs');
var _ = require('lodash');

/*module.exports = function(type, component) {
  if (arguments.length !== 2) {
    throw new Error('you must specify a type and a component');
  }

  var componentPath = './lib/components/' +
   type.toLowerCase() +
   '/' + component.toLowerCase() +
   '/' + _.capitalize(component);

  return require(componentPath);
}*/

module.exports = {
  block: {
    Section: require('./lib/components/blocks/section/Section')
  },
  element: {
    Button: require('./lib/components/elements/button/Button')
  },
  container: {
    BtnContainer: require('./lib/components/containers/btnContainer/BtnContainer')
  }
}
