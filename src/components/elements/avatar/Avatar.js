var React = require('react');

var Avatar = React.createClass({
  displayName: 'Avatar',
  propTypes: {
    url: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div className="Avatar" style={{backgroundImage: 'url(' + this.props.url + ')'}}></div>
    );
  }

});

module.exports = Avatar;
