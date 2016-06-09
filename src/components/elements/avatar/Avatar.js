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
      </div>
    );
  }

});

module.exports = Avatar;
