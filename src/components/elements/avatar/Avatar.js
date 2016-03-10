var React = require('react');
var classnames = require('classnames');

var Avatar = React.createClass({
  displayName: 'Avatar',
  propTypes: {
    url: React.PropTypes.string.isRequired,
    /**
     * Enum: `user|org`, Default: `user`
     */
    format: React.PropTypes.oneOf([ 'org', 'user' ]),
    /**
     * Enum: `small|medium|large`, Default: `small`
     */
    size: React.PropTypes.oneOf([ 'small', 'medium', 'large' ])
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
      <div className={classnames(classes)}>
        <img className="Avatar__image"
        src={this.props.url}
        id="wrap-image" />
      </div>
    );
  }

});

module.exports = Avatar;
