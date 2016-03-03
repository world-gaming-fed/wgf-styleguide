'use strict';
let _ = require('lodash');

module.exports = function (className, modifiers) {
  let newClassName = className;

  if (modifiers) {
    modifiers = modifiers.split(' ');

    _.each(modifiers, function (modifier) {
      newClassName += ' ' + className + '--' + modifier;
    });
  }

  return newClassName;
};
