var React = require('react');
var Plus = require('../plus/Plus');
var classnames = require('classnames');
var _ = require('lodash');

var AddGame = React.createClass({
  propTypes: {
    buttons: React.PropTypes.array.isRequired,
    model: React.PropTypes.array,
    loader: React.PropTypes.bool,
    changeHandler: React.PropTypes.func
  },
  getDefaultProps: function() {
    return {
      buttons: []
    };
  },
  getInitialState: function() {
    return {
      open: false
    };
  },
  toggle: function() {
    this.state.open = !this.state.open;
    this.setState(this.state);
  },
  onInputChange: function(e) {
    var value = e.currentTarget.value;
    var values = this.props.model;
    if (_.contains(values, value)) {
      _.pull(values, value);
    }
    else {
      values.push(value);
    }
    if (this.props.changeHandler) {
      this.props.changeHandler(values);
    }
  },
  isInModel: function(value) {
    return _.contains(this.props.model, value);
  },
  buildButtons: function(buttons) {
    return buttons.map(function(button, i) {
      var classes = [ 'AddGame__buttons__checkbox', 'item-' + (i + 1) ];

      return (
        <div className={classnames(classes)} key={'addgameplatforms-' + i}>
          <input
            id={'addgameplatforms-' + i}
            type="checkbox" value={button}
            name={'addgameplatforms-' + i}
            onChange={ this.onInputChange }
            checked={ this.isInModel(button) }/>
          <label htmlFor={'addgameplatforms-' + i}>{button}</label>
        </div>
      );
    }.bind(this));
  },
  render: function() {
    var classes = [ 'AddGame' ];

    if (this.state.open) {
      classes.push('state--open');
    }

    return (
      <div className={classnames(classes)}>
        <div className="AddGame__buttons">
          { this.buildButtons(this.props.buttons) }
        </div>
        <Plus loader={this.props.loader} modifier="main" onClick={this.toggle} icon={this.props.model && this.props.model.length ? 'arrows_check' : 'arrows_plus'}/>
      </div>
    );
  }

});

module.exports = AddGame;
