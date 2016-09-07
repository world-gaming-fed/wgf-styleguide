'use strict';

var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');
var Link = require('react-router').Link;

var LinkTitle = React.createClass({
  displayName: 'LinkTitle',

  propTypes: {
    children: React.PropTypes.node,
    /**
     * Define heading level h1-h6
     */
    headingLevel: React.PropTypes.number,
    /**
     * Title modifier: `head|subHead`
     */
    titleModifier: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      headingTag: 'h1'
    };
  },

  componentWillMount: function() {
    this.defineHeadingLevelTag(this.props.headingLevel);
  },

  defineHeadingLevelTag: function(headingLevel) {
    if (!headingLevel) {
      return;
    }

    if (headingLevel > 6) {
      throw new Error('[LinkTitle:defineHeadingLevelTag] not support heading behind 3');
    }

    this.state.headingTag = 'h' + headingLevel;
  },

  renderLink(props) {


    if (_.has(props, 'to')) {
      return (
        <Link {...props} className="LinkTitle__link">{this.props.children} <span className="wgf-icon-arrows_right"></span></Link>
      );
    } else {
      return (
        <a {...props} className="LinkTitle__link">{this.props.children} <span className="wgf-icon-arrows_right"></span></a>
      )
    }
  },

  render: function() {
    var classes = [ 'LinkTitle', 'Title' ];
    var {headingLevel, titleModifier, ...other} = this.props;

    if (titleModifier) {
      classes.push('Title--' + titleModifier);
    }

    return (
      <this.state.headingTag className={classNames(classes)}>
        {this.renderLink(other)}
      </this.state.headingTag>
    );
  }
});

module.exports = LinkTitle;
