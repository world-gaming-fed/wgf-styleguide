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
      to: React.PropTypes.string,
      icon: React.PropTypes.string
    },

    renderIcon: function() {
      var iconClassName;
      if (this.props.icon) {
        iconClassName = 'wgf-icon-' + this.props.icon;
        return (<span className={iconClassName}></span>);
      }
      return null;
    },

    render: function() {
      var classString = 'Button';

      if (this.props.className) {
        classString += ' ' + this.props.className;
      }

      if (this.props.to) {
        return (
          <Link {...this.props} className={classString}>
            {this.renderIcon()}
            <span className="Button__text">{this.props.children}</span>
          </Link>
        );
      }

      if (this.props.href) {
        return (
          <a {...this.props} className={classString}>
            {this.renderIcon()}
            <span className="Button__text">{this.props.children}</span>
          </a>
        );
      }

      return (
        <button {...this.props} className={classString}>
          {this.renderIcon()}
          <span className="Button__text">{this.props.children}</span>
        </button>
      );
    }
  });
};
