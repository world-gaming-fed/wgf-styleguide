'use strict';

var React = require('react');
var classnames = require('classnames');

var TabButton = require('../../elements/buttons/tabButton/TabButton');

var SimpleTabPanel = React.createClass({
  displayName: 'SimpleTabPanel',
  propTypes: {
    children: React.PropTypes.string.isRequired,
    tabs: React.PropTypes.array.isRequired
  },
  getInitialState: function() {
    return {
      activePosition: 0
    };
  },
  setActiveTab: function(position) {
    this.setState({
      activePosition: position
    });
  },
  render: function() {
    var classes = [
      'SimpleTabPanel__panels__viewport',
      'activePosition-' + this.state.activePosition
    ];

    return (
      <div className="SimpleTabPanel">
        <div className="SimpleTabPanel__nav">
          { this.props.tabs.map(function(tabText, i) {
            return (<TabButton onClick={this.setActiveTab.bind(this, i)} active={i === this.state.activePosition}>{ tabText }</TabButton>);
          }.bind(this)) }
        </div>
        <div className="SimpleTabPanel__panels">
          <div className={classnames(classes)}>
            { this.props.children.map(function(child) {
              return (
                <div className="SimpleTabPanel__panels__panel">{ child }</div>
              );
            }) }
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SimpleTabPanel;
