var Link = require('react-router').Link;

module.exports = function(React) {
  return React.createClass({
    displayName: 'Button',
    propTypes: {
      children: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.element
      ]),
      className: React.PropTypes.string,
      href: React.PropTypes.string,
      to: React.PropTypes.string
    },
    render: function() {
      var classString = 'Button';

      if (this.props.className) {
        classString += ' ' + this.props.className;
      }

      if (this.props.to) {
        return (
          <Link {...this.props} className={classString}>{this.props.children}</Link>
        );
      }

      if (this.props.href) {
        return (
          <a {...this.props} className={classString}>{this.props.children}</a>
        );
      }

      return (
        <button {...this.props} className={classString}>
          {this.props.children}
        </button>
      );
    }
  });
};
