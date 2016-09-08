'use strict';

var classnames = require('classnames');
var update = require('react-addons-update');
var ReactDOM = require('react-dom');

var ContentNav = function(React) {
  var nodes = [];
  var contentNav;
  return React.createClass({
    displayName: 'ContentNav',
    propTypes: {
      children: React.PropTypes.node
    },
    getInitialState: function() {
      return {
        barStyles: {},
        isMounted: false,
        activeNode: {}
      };
    },

    componentDidMount: function() {
      this.placeBar(null, this.findActiveRef());
      setTimeout(function() {
        this.setAsMounted();
      }.bind(this));
    },

    componentDidUpdate: function() {
      this.placeBar(null, this.findActiveRef());
    },

    findActiveRef: function() {
      var node = nodes[0];
      var activeNodes = contentNav.querySelectorAll('.active');
      if (activeNodes.length) {
        node = activeNodes[0].parentNode;
      }
      return node;
    },

    placeBar: function(event, element) {
      var el;
      var newState;

      if (event && event.currentTarget) {
        el = ReactDOM.findDOMNode(event.currentTarget);
      }
      else {
        el = element;
      }
      if (el !== this.state.activeNode) {
        newState = update(this.state, {
          activeNode: {$set: el},
          barStyles: {$set: {
            width: el.offsetWidth,
            transform: 'translateX(' + el.offsetLeft + 'px)'
          }}
        });
        this.setState(newState);
      }
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
          <ul className="ContentNav__list" ref={function(ref) { contentNav = ref; }}>
            { React.Children.map(this.props.children, function(item, i) {
              return (
                <li ref={function(ref) { nodes[i] = ref; }} className="ContentNav__list__item" key={ 'ContentNavItem' + i } onClick={this.placeBar}>
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
