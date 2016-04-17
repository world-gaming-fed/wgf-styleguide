'use strict';

var React = require('react');
var classnames = require('classnames');

var ContentPak = React.createClass({
  displayName: 'ContentPak',
  propTypes: {
    /**
     * Theme `official(default)|social`
     */
    theme: React.PropTypes.oneOf([ 'social', 'official' ]),
    children: React.PropTypes.string.isRequired
  },
  render: function() {
    var classes = [ 'ContentPak' ];

    if (this.props.theme) {
      classes.push('th--' + this.props.theme);
    }

    return (
      <div className={classnames(classes)}>
        <div className="ContentPak__ctn">
          <div className="ContentPak__ctn__inner">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ContentPak;
