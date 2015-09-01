(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Contents = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _default = (function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(_default, null, [{
    key: 'styleguide',
    value: {
      index: '1.1',
      category: 'Block',
      title: 'Section',
      description: 'Main section',
      code: '<Section title="Put the title here" modifier="Section--alt|Section--alt2">[HTML content]</Section>',
      className: 'app-body',
      // Component to use for generating additional examples
      exampleComponent: _Section2['default'],
      // Array of additional example tabs
      examples: [{
        tabTitle: 'Default',
        props: {
          title: 'test',
          children: 'Default'
        }
      }]
    },
    enumerable: true
  }]);

  return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"./Section":2,"react":"react"}],2:[function(require,module,exports){
'use strict';

var React = require('react/addons');

/**
 * Main section
 */
var Section = React.createClass({
  displayName: 'Section',
  statics: {
    styleguide: {
      index: '1.1',
      category: 'Block',
      title: 'Section',
      description: 'Main section',
      code: '<Section title="Put the title here" modifier="Section--alt|Section--alt2">[HTML content]</Section>',
      className: 'app-body',
      exampleComponent: Section,
      examples: [{
        props: {
          title: 'examples'
        }
      }]
    }
  },

  propTypes: {
    /**
     * Element to put at the right of the title
     */
    additionalInfos: React.PropTypes.element,
    children: React.PropTypes.element,
    id: React.PropTypes.string,
    modifier: React.PropTypes.string,
    title: React.PropTypes.string.isRequired
  },

  render: function render() {
    var classes;
    var additionnalInfos;

    if (this.props.modifier) {
      classes = React.addons.classSet('Section', this.props.modifier);
    } else {
      classes = React.addons.classSet('Section');
    }

    if (this.props.additionalInfos) {
      additionnalInfos = React.createElement(
        'div',
        { className: 'Section__header__additionalInfos' },
        this.props.additionalInfos
      );
    }

    return React.createElement(
      'section',
      { className: classes, id: this.props.id },
      React.createElement(
        'div',
        { className: 'Section__inner' },
        React.createElement(
          'header',
          { className: 'Section__header' },
          React.createElement(
            'div',
            { className: 'Section__header__title' },
            React.createElement(
              'h2',
              { className: 'Title' },
              this.props.title
            )
          ),
          additionnalInfos
        ),
        React.createElement(
          'div',
          { className: 'Section__content' },
          this.props.children
        )
      )
    );
  }
});

module.exports = Section;

},{"react/addons":"react/addons"}],3:[function(require,module,exports){
'use strict';

module.exports = [require('/Users/dberseron/workspace/github/world-gaming-fed/styleguide/src/components/blocks/section/Section.example.js'), require('/Users/dberseron/workspace/github/world-gaming-fed/styleguide/src/components/blocks/section/Section.js')];

},{"/Users/dberseron/workspace/github/world-gaming-fed/styleguide/src/components/blocks/section/Section.example.js":1,"/Users/dberseron/workspace/github/world-gaming-fed/styleguide/src/components/blocks/section/Section.js":2}]},{},[3])(3)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2RiZXJzZXJvbi93b3Jrc3BhY2UvZ2l0aHViL3dvcmxkLWdhbWluZy1mZWQvc3R5bGVndWlkZS9zcmMvY29tcG9uZW50cy9ibG9ja3Mvc2VjdGlvbi9TZWN0aW9uLmV4YW1wbGUuanMiLCIvVXNlcnMvZGJlcnNlcm9uL3dvcmtzcGFjZS9naXRodWIvd29ybGQtZ2FtaW5nLWZlZC9zdHlsZWd1aWRlL3NyYy9jb21wb25lbnRzL2Jsb2Nrcy9zZWN0aW9uL1NlY3Rpb24uanMiLCIvVXNlcnMvZGJlcnNlcm9uL3dvcmtzcGFjZS9naXRodWIvd29ybGQtZ2FtaW5nLWZlZC9zdHlsZWd1aWRlL3N0eWxlZ3VpZGUvc3JjL2NvbnRlbnRzLWludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztxQkNBa0IsT0FBTzs7Ozt1QkFDTCxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7V0FHVDtBQUNsQixXQUFLLEVBQUUsS0FBSztBQUNaLGNBQVEsRUFBRSxPQUFPO0FBQ2pCLFdBQUssRUFBRSxTQUFTO0FBQ2hCLGlCQUFXLEVBQUUsY0FBYztBQUMzQixVQUFJLHNHQUFzRztBQUMxRyxlQUFTLEVBQUUsVUFBVTs7QUFFckIsc0JBQWdCLHNCQUFTOztBQUV6QixjQUFRLEVBQUUsQ0FBQztBQUNULGdCQUFRLEVBQUUsU0FBUztBQUNuQixhQUFLLEVBQUU7QUFDTCxlQUFLLEVBQUUsTUFBTTtBQUNiLGtCQUFRLEVBQUUsU0FBUztTQUNwQjtPQUNGLENBQUM7S0FDSDs7Ozs7R0FsQjBCLG1CQUFNLFNBQVM7Ozs7Ozs7O0FDSDVDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzs7Ozs7QUFLcEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztBQUM5QixhQUFXLEVBQUUsU0FBUztBQUN0QixTQUFPLEVBQUU7QUFDUCxjQUFVLEVBQUU7QUFDUixXQUFLLEVBQUUsS0FBSztBQUNaLGNBQVEsRUFBRSxPQUFPO0FBQ2pCLFdBQUssRUFBRSxTQUFTO0FBQ2hCLGlCQUFXLEVBQUUsY0FBYztBQUMzQixVQUFJLHNHQUFzRztBQUMxRyxlQUFTLEVBQUUsVUFBVTtBQUNyQixzQkFBZ0IsRUFBRSxPQUFPO0FBQ3pCLGNBQVEsRUFBRSxDQUFDO0FBQ1QsYUFBSyxFQUFFO0FBQ0wsZUFBSyxFQUFFLFVBQVU7U0FDbEI7T0FDRixDQUFDO0tBQ0w7R0FDRjs7QUFFRCxXQUFTLEVBQUU7Ozs7QUFJVCxtQkFBZSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTztBQUN4QyxZQUFRLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPO0FBQ2pDLE1BQUUsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDMUIsWUFBUSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUNoQyxTQUFLLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtHQUN6Qzs7QUFFRCxRQUFNLEVBQUUsa0JBQVc7QUFDakIsUUFBSSxPQUFPLENBQUM7QUFDWixRQUFJLGdCQUFnQixDQUFDOztBQUVyQixRQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ3ZCLGFBQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNqRSxNQUNJO0FBQ0gsYUFBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzVDOztBQUVELFFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUU7QUFDOUIsc0JBQWdCLEdBQ2Q7O1VBQUssU0FBUyxFQUFDLGtDQUFrQztRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWU7T0FDdkIsQUFDUCxDQUFDO0tBQ0g7O0FBRUQsV0FDRTs7UUFBUyxTQUFTLEVBQUUsT0FBTyxBQUFDLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxBQUFDO01BQzdDOztVQUFLLFNBQVMsRUFBQyxnQkFBZ0I7UUFDN0I7O1lBQVEsU0FBUyxFQUFDLGlCQUFpQjtVQUNqQzs7Y0FBSyxTQUFTLEVBQUMsd0JBQXdCO1lBQ3JDOztnQkFBSSxTQUFTLEVBQUMsT0FBTztjQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSzthQUFNO1dBQ3pDO1VBQ0wsZ0JBQWdCO1NBQ1Y7UUFDVDs7WUFBSyxTQUFTLEVBQUMsa0JBQWtCO1VBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtTQUNoQjtPQUNGO0tBQ0UsQ0FDVjtHQUNIO0NBQ0YsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOzs7OztBQ3hFekIsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxnSEFBZ0gsQ0FBQyxFQUFDLE9BQU8sQ0FBQyx3R0FBd0csQ0FBQyxDQUFDLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZWd1aWRlID0ge1xuICAgIGluZGV4OiAnMS4xJyxcbiAgICBjYXRlZ29yeTogJ0Jsb2NrJyxcbiAgICB0aXRsZTogJ1NlY3Rpb24nLFxuICAgIGRlc2NyaXB0aW9uOiAnTWFpbiBzZWN0aW9uJyxcbiAgICBjb2RlOiBgPFNlY3Rpb24gdGl0bGU9XCJQdXQgdGhlIHRpdGxlIGhlcmVcIiBtb2RpZmllcj1cIlNlY3Rpb24tLWFsdHxTZWN0aW9uLS1hbHQyXCI+W0hUTUwgY29udGVudF08L1NlY3Rpb24+YCxcbiAgICBjbGFzc05hbWU6ICdhcHAtYm9keScsXG4gICAgLy8gQ29tcG9uZW50IHRvIHVzZSBmb3IgZ2VuZXJhdGluZyBhZGRpdGlvbmFsIGV4YW1wbGVzXG4gICAgZXhhbXBsZUNvbXBvbmVudDogU2VjdGlvbixcbiAgICAvLyBBcnJheSBvZiBhZGRpdGlvbmFsIGV4YW1wbGUgdGFic1xuICAgIGV4YW1wbGVzOiBbe1xuICAgICAgdGFiVGl0bGU6ICdEZWZhdWx0JyxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHRpdGxlOiAndGVzdCcsXG4gICAgICAgIGNoaWxkcmVuOiAnRGVmYXVsdCdcbiAgICAgIH1cbiAgICB9XVxuICB9XG59XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdC9hZGRvbnMnKTtcblxuLyoqXG4gKiBNYWluIHNlY3Rpb25cbiAqL1xudmFyIFNlY3Rpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnU2VjdGlvbicsXG4gIHN0YXRpY3M6IHtcbiAgICBzdHlsZWd1aWRlOiB7XG4gICAgICAgIGluZGV4OiAnMS4xJyxcbiAgICAgICAgY2F0ZWdvcnk6ICdCbG9jaycsXG4gICAgICAgIHRpdGxlOiAnU2VjdGlvbicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTWFpbiBzZWN0aW9uJyxcbiAgICAgICAgY29kZTogYDxTZWN0aW9uIHRpdGxlPVwiUHV0IHRoZSB0aXRsZSBoZXJlXCIgbW9kaWZpZXI9XCJTZWN0aW9uLS1hbHR8U2VjdGlvbi0tYWx0MlwiPltIVE1MIGNvbnRlbnRdPC9TZWN0aW9uPmAsXG4gICAgICAgIGNsYXNzTmFtZTogJ2FwcC1ib2R5JyxcbiAgICAgICAgZXhhbXBsZUNvbXBvbmVudDogU2VjdGlvbixcbiAgICAgICAgZXhhbXBsZXM6IFt7XG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnZXhhbXBsZXMnXG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgIH0sXG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgLyoqXG4gICAgICogRWxlbWVudCB0byBwdXQgYXQgdGhlIHJpZ2h0IG9mIHRoZSB0aXRsZVxuICAgICAqL1xuICAgIGFkZGl0aW9uYWxJbmZvczogUmVhY3QuUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgY2hpbGRyZW46IFJlYWN0LlByb3BUeXBlcy5lbGVtZW50LFxuICAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1vZGlmaWVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjbGFzc2VzO1xuICAgIHZhciBhZGRpdGlvbm5hbEluZm9zO1xuXG4gICAgaWYgKHRoaXMucHJvcHMubW9kaWZpZXIpIHtcbiAgICAgIGNsYXNzZXMgPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXQoJ1NlY3Rpb24nLCB0aGlzLnByb3BzLm1vZGlmaWVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjbGFzc2VzID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0KCdTZWN0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuYWRkaXRpb25hbEluZm9zKSB7XG4gICAgICBhZGRpdGlvbm5hbEluZm9zID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNlY3Rpb25fX2hlYWRlcl9fYWRkaXRpb25hbEluZm9zXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuYWRkaXRpb25hbEluZm9zfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlc30gaWQ9e3RoaXMucHJvcHMuaWR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNlY3Rpb25fX2lubmVyXCI+XG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJTZWN0aW9uX19oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2VjdGlvbl9faGVhZGVyX190aXRsZVwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiVGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7YWRkaXRpb25uYWxJbmZvc31cbiAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNlY3Rpb25fX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWN0aW9uO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBbcmVxdWlyZSgnL1VzZXJzL2RiZXJzZXJvbi93b3Jrc3BhY2UvZ2l0aHViL3dvcmxkLWdhbWluZy1mZWQvc3R5bGVndWlkZS9zcmMvY29tcG9uZW50cy9ibG9ja3Mvc2VjdGlvbi9TZWN0aW9uLmV4YW1wbGUuanMnKSxyZXF1aXJlKCcvVXNlcnMvZGJlcnNlcm9uL3dvcmtzcGFjZS9naXRodWIvd29ybGQtZ2FtaW5nLWZlZC9zdHlsZWd1aWRlL3NyYy9jb21wb25lbnRzL2Jsb2Nrcy9zZWN0aW9uL1NlY3Rpb24uanMnKV0iXX0=
