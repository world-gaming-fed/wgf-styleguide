var Link = require('react-router').Link;
var classnames = require('classnames');
var Icon = require('../../icon/Icon');

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
      icon: React.PropTypes.string,
      /**
       * Modifier: `twitter|facebook|callToAction|pushForward`
       */
      modifier: React.PropTypes.string
    },

    applyModifier: function(classes) {
      if (this.props.modifier) {
        classes.push(this.props.modifier.split(' ').map(function(modifier) {
          return 'Button--' + modifier;
        }));
      }
      return classes;
    },

    renderIcon: function() {
      if (this.props.icon) {
        return (<Icon>{this.props.icon}</Icon>);
      }
      return null;
    },

    render: function() {
      var classes = [ 'Button' ];

      classes = this.applyModifier(classes);

      if (this.props.className) {
        classes.push(this.props.className);
      }

      if (this.props.to) {
        return (
          <Link {...this.props} className={classnames(classes)}>
            <span className="Button__inner">
              {this.renderIcon()}
              <span className="Button__inner__text">{this.props.children}</span>
            </span>
          </Link>
        );
      }

      if (this.props.href) {
        return (
          <a {...this.props} className={classnames(classes)}>
            <span className="Button__inner">
              {this.renderIcon()}
              <span className="Button__inner__text">{this.props.children}</span>
            </span>
          </a>
        );
      }

      return (
        <button {...this.props} className={classnames(classes)}>
          <span className="Button__inner">
            {this.renderIcon()}
            <span className="Button__inner__text">{this.props.children}</span>
          </span>
        </button>
      );
    }
  });
};
