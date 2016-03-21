'use strict';

var React = require('react');
var classnames = require('classnames');
var _ = require('lodash');

var TabButton = React.createClass({
  displayName: 'TabButton',
  propTypes: {
    active: React.PropTypes.bool,
    children: React.PropTypes.string.isRequired
  },
  componentDidMount: function() {
    if (this.props.active) {
      this.setState({isActive: true}); // eslint-disable-line react/no-did-mount-set-state
    }
  },
  componentWillReceiveProps: function(newProps) {
    if (!_.isUndefined(newProps.active) && newProps.active !== this.state.active) {
      this.setState({isActive: newProps.active});
    }
  },
  getInitialState: function() {
    return {
      isActive: false
    };
  },
  render: function() {
    var classes = [ 'TabButton' ];

    if (this.state.isActive) {
      classes.push('state--active');
    }

    return (
      <button {...this.props} className={ classnames(classes) }>{ this.props.children }</button>
    );
  }
});

module.exports = TabButton;
