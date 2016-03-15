'use strict';

var classnames = require('classnames');

var ContentNav = function(React) {
  var update = React.addons.update;

  return React.createClass({
    displayName: 'ContentNav',
    propTypes: {
      children: React.PropTypes.element
    },
    getInitialState: function() {
      return {
        barStyles: {},
        isMounted: false
      };
    },
    componentDidMount: function() {
      this.placeBar(null, React.findDOMNode(this.refs.ContentNavItem0));
      setTimeout(function() {
        this.setAsMounted();
      }.bind(this));
    },
    placeBar: function(event, element) {
      var el;
      var newState;

      if (event && event.currentTarget) {
        el = React.findDOMNode(event.currentTarget);
      }
      else {
        el = React.findDOMNode(element);
      }

      newState = update(this.state, {
        barStyles: {$set: {
          width: el.offsetWidth,
          transform: 'translateX(' + el.offsetLeft + 'px)'
        }}
      });

      this.setState(newState);
    },
    setAsMounted: function() {
      var newState = update(this.state, {
        isMounted: {$set: true}
      });

      this.setState(newState);
    },
    render: function() {
      var classes = [ 'ContentNav' ];

      if (this.state.isMounted) {
        classes.push('state--mounted');
      }

      return (
        <div className={classnames(classes)}>
          <ul className="ContentNav__list">
            { this.props.children.map(function(item, i) {
              return (
                <li ref={'ContentNavItem' + i} className="ContentNav__list__item" key={ 'ContentNavItem' + i } onClick={this.placeBar}>
                  {item}
                </li>
              );
            }.bind(this)) }
          </ul>
          <span className="ContentNav__bar" style={this.state.barStyles}/>
        </div>
      );
    }
  });
};

module.exports = ContentNav;
