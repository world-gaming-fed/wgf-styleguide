'use strict';

var React = require('react');
var Icon = require('../../icon/Icon');

var IconList = React.createClass({
  displayName: 'IconList',
  propTypes: {
    children: React.PropTypes.node
  },
  buildItem: function(item, index) {
    var icon = null;

    if (item.props && item.props.icon) {
      icon = (<Icon>{item.props.icon}</Icon>);
    }

    return (
      <li key={'iconList-' + index}>
        {icon}
        {item.props.children}
      </li>
    );
  },
  buildList: function(items) {
    if (items instanceof Array) {
      return items.map(function(item, i) {
        return this.buildItem(item, i);
      }.bind(this));
    }
    else {
      return this.buildItem(items);
    }
  },
  render: function() {
    return (
      <ul className="IconList">
        {this.buildList(this.props.children)}
      </ul>
    );
  }
});

module.exports = IconList;
