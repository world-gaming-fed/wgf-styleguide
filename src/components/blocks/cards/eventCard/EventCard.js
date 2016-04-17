'use strict';

var React = require('react');
var classnames = require('classnames');

var EventCard = React.createClass({
  displayName: 'EventCard',
  propTypes: {
    children: React.PropTypes.element,
    name: React.PropTypes.string.isRequired,
    imgURL: React.PropTypes.string,
    label: React.PropTypes.string,
    /**
     * size of card in enum : small | (nothing to normal size)
     */
    size: React.PropTypes.oneOf([ 'small' ])
  },
  buildLabel: function(label) {
    if (!label) {
      return null;
    }

    return (
      <span className="EventCard__label">{label}</span>
    );
  },
  render: function() {
    var label = this.buildLabel(this.props.label);

    var classes = [ {
      EventCard: true,
      'state--labelize': !!label,
      'state--hasPlusElement': !!this.props.children
    } ];

    if (this.props.size) {
      classes.push('EventCard--' + this.props.size);
    }

    return (
      <div className={classnames(classes)}>
        <img className="EventCard__cover" src={ this.props.imgURL } />
        <div className="EventCard__mask"></div>
        {label}
        <div className="EventCard__content">
          <div className="EventCard__content__title"><h2 className="Title">{this.props.name}</h2></div>
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = EventCard;
