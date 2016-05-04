var React = require('react');
var Plus = require('../plus/Plus');
var classnames = require('classnames');
var _ = require('lodash');

var AddGame = React.createClass({
  propTypes: {
    buttons: React.PropTypes.array.isRequired,
    model: React.PropTypes.array,
    changeHandler: React.PropTypes.func
  },
  getDefaultProps: function() {
    return {
      buttons: [],
      model: []
    };
  },
  getInitialState: function() {
    return {
      open: false,
      model: this.props.model
    };
  },
  toggle: function() {
    this.state.open = !this.state.open;
    this.setState(this.state);
  },
  onInputChange: function(e) {
    var value = e.currentTarget.value;
    if (_.contains(this.props.model, value)) {
      _.pull(this.state.model, value);
    }
    else {
      this.state.model.push(value);
    }

    this.setState(this.state);
    if (this.props.changeHandler) {
      this.props.changeHandler(this.state.model);
    }
  },
  isInModel: function(value) {
    return _.contains(this.state.model, value);
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
        <Plus modifier="main" onClick={this.toggle} icon={this.state.model.length ? 'arrows_check' : 'arrows_plus'}/>
      </div>
    );
  }

});

module.exports = AddGame;
