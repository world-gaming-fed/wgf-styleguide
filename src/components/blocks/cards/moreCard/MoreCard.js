'use strict';

var React = require('react');
var classnames = require('classnames');
var Icon = require('../../../elements').Icon;

var MoreCard = React.createClass({
  displayName: 'MoreCard',
  propTypes: {
    /**
     * Passe the number here
     */
    children: React.PropTypes.node,
    label: React.PropTypes.string,
    /**
     * Type of card `game|event`, Default: `game`
     */
    type: React.PropTypes.oneOf([ 'game', 'event' ])
  },
  render: function() {
    var classes = [ {
      MoreCard: true
    } ];

    if (this.props.type) {
      classes.push('MoreCard--' + this.props.type);
    }

    return (
      <div className={classnames(classes)}>
        <Icon>arrows_right</Icon>
        <div className="MoreCard__number">{this.props.children}</div>
        <div className="MoreCard__label">
          { this.props.label.split('\\n').map(function(item, i) {
            return (
              <span key={'nBreak' + i}>
                {item}
                <br/>
              </span>
            );
          }) }
        </div>
      </div>
    );
  }
});

module.exports = MoreCard;
