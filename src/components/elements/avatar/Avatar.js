var React = require('react');
var classnames = require('classnames');
var InlineSVG = require('svg-inline-react');

var Avatar = React.createClass({
  displayName: 'Avatar',
  propTypes: {
    /**
     * image url
     */
    url: React.PropTypes.string.isRequired,
    /**
     * image url 2x
     */
    url2x: React.PropTypes.string,
    /**
     * Enum: `user|org`, Default: `user`
     */
    format: React.PropTypes.oneOf([ 'org', 'user' ]),
    /**
     * Enum: `small|medium|large`, Default: `small`
     */
    size: React.PropTypes.oneOf([ 'small', 'medium', 'large', 'x-large' ])
  },

  renderImg: function() {
    var img = (
      <img className="Avatar__image" src={this.props.url} />
    );

    if (this.props.url2x) {
      img = (
        <img className="Avatar__image" src={this.props.url} srcSet={this.props.url2x + ' 2x'} />
      );
    }

    return img;
  },

  renderSvg: function() {
    if (this.props.format !== 'org') {
      return null;
    }
    return (
      <svg width="0" height="0">
        <defs>
          <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
            <polygon points="0.5 0.019, 0.084 0.26, 0.084 0.74, 0.5 0.98, 0.91 0.74, 0.91 0.26, 0.5 0.019" />
          </clipPath>
        </defs>
      </svg>
    );
  },

  render: function() {
    var classes = [ 'Avatar' ];

    if (this.props.format) {
      classes.push('Avatar--' + this.props.format);
    } else {
      classes.push('Avatar--user');
    }

    if (this.props.size) {
      classes.push('Avatar--' + this.props.size);
    } else {
      classes.push('Avatar--small');
    }

    return (
      <div {...this.props} className={classnames(classes)}>
        { this.renderImg() }
        { this.renderSvg() }
      </div>
    );
  }

});

module.exports = Avatar;
