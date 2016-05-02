var Formsy = require('formsy-react');
var classnames = require('classnames');
var _ = require('lodash');

module.exports = function(React) {
  return React.createClass({
    displayName: 'Field',
    propTypes: {
      className: React.PropTypes.string,
      id: React.PropTypes.string,
      label: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      onChange: React.PropTypes.func,
      type: React.PropTypes.string,
      validateOnLive: React.PropTypes.bool,
      withoutValidation: React.PropTypes.bool
    },

    mixins: [ Formsy.Mixin ],
    waitingForActionTimeout: null,

    changeValue: function (event) {
      this.setValue(event.currentTarget.value);

      if (this.props.onChange && typeof this.props.onChange === 'function') {
        if (this.waitingForActionTimeout) {
          clearTimeout(this.waitingForActionTimeout);
        }
        this.waitingForActionTimeout = setTimeout(function(e) {
          this.props.onChange(e);
        }.bind(this, _.clone(event)), 250);
      }
    },

    validateOnLive: function(validateOnLive) {
      var response = false;
      if (validateOnLive) {
        response = true;
      }
      else {
        response = this.isFormSubmitted();
      }
      return response;
    },

    render: function () {
      var className = classnames(
        this.props.className,
        'Field',
        {
          withoutValidation: this.props.withoutValidation,
          required: !this.isPristine() && this.validateOnLive(this.props.validateOnLive) && this.showRequired(),
          error: !this.isPristine() && this.validateOnLive(this.props.validateOnLive) && !this.showRequired() && this.showError()
        }
      );

      var errorMessage = this.getErrorMessage();

      return (
        <div className={className}>
          <div className="Field__field">
            <label htmlFor={this.props.id}>{this.props.label}</label>
            <input autoComplete="off" id={this.props.id} name={this.props.name} onChange={this.changeValue} type={this.props.type || 'text'} value={this.getValue()}/>
          </div>
          <span className="Field__error">{errorMessage}</span>
        </div>
      );
    }

  });
};
