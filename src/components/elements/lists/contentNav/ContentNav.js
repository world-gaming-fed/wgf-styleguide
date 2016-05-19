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
        isMounted: false,
        activeRef: null
      };
    },
    componentDidMount: function() {
      this.placeBar(null, React.findDOMNode(this.refs[this.findActiveRef()]));
      setTimeout(function() {
        this.setAsMounted();
      }.bind(this));
    },

    componentDidUpdate: function() {
      this.placeBar(null, React.findDOMNode(this.refs[this.findActiveRef()]));
    },

    getRef: function(element) {
      var dataId;
      if (element) {
        dataId = element.getAttribute('data-reactid').split('$');
        return dataId[dataId.length - 1];
      }
      return this.state.activeRef;
    },

    findActiveRef: function() {
      var ref = 'ContentNavItem0';
      var activeRef = React.findDOMNode(this.refs.ContentNav).querySelectorAll('.active');

      if (activeRef.length) {
        ref = this.getRef(activeRef[0].parentNode);
      }
      return ref;
    },

    placeBar: function(event, element) {
      var el;
      var newState;
      var newRef = this.getRef(element);

      if (event && event.currentTarget) {
        el = React.findDOMNode(event.currentTarget);
      }
      else {
        el = React.findDOMNode(element);
      }

      if (newRef !== this.state.activeRef) {
        newState = update(this.state, {
          activeRef: {$set: newRef},
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
          <ul className="ContentNav__list" ref="ContentNav">
            { React.Children.map(this.props.children, function(item, i) {
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
