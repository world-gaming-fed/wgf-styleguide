var React = require('react');
var _ = require('lodash');
var applyClassNameModifier = require('../../../utils/applyClassNameModifier');

var BtnContainer = React.createClass({
  displayName: 'BtnContainer',
  propTypes: {
    children: React.PropTypes.element,
    /**
     * `['full']` Change container mode
     */
    modifiers: React.PropTypes.string
  },

  render: function() {
    var props = _.clone(this.props);
    var classes = applyClassNameModifier('BtnContainer', this.props.modifiers);

    if (props.modifiers) {
      delete props.modifiers;
    }

    return (
      <div {...props} className={classes}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = BtnContainer;
