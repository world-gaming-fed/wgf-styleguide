'use strict';
var _ = require('lodash');

module.exports = function(className, modifiers) {
  var newClassName = className;

  if (modifiers) {
    modifiers = modifiers.split(' ');

    _.each(modifiers, function(modifier) {
      newClassName += ' ' + className + '--' + modifier;
    });
  }

  return newClassName;
}
