var React = require('react');
var classnames = require('classnames');

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

  renderImg: function(style) {
    var img = (
      <img className="Avatar__image" src={this.props.url} style={style} />
    );

    if (this.props.url2x) {
      img = (
        <img className="Avatar__image" src={this.props.url} srcSet={this.props.url2x + ' 2x'} style={style} />
      );
    }

    return img;
  },

  renderSvg: function() {
    if (this.props.format !== 'org') {
      return null;
    }
    return (
      <svg height="0">
        <defs>
          <clipPath id="clipShape" clipPathUnits="objectBoundingBox">
            <polygon points="0.5 0.019, 0.084 0.26, 0.084 0.74, 0.5 0.98, 0.91 0.74, 0.91 0.26, 0.5 0.019" />
          </clipPath>
        </defs>
      </svg>
    );
  },

  render: function() {
    var classes = [ 'Avatar' ];
    var {format, size, ...other} = this.props;
    var style = {
      clipPath: format === 'org' ? 'url(#clipShape)' : ''
    };

    if (format) {
      classes.push('Avatar--' + format);
    } else {
      classes.push('Avatar--user');
    }

    if (size) {
      classes.push('Avatar--' + size);
    } else {
      classes.push('Avatar--small');
    }

    return (
      <div className={classnames(classes)}>
        { this.renderImg(style) }
        { this.renderSvg() }
      </div>
    );
  }

});

module.exports = Avatar;
