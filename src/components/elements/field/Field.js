var Formsy = require('formsy-react');
var classnames = require('classnames');

module.exports = function(React) {
  return React.createClass({
    displayName: 'Field',
    propTypes:{
      className: React.PropTypes.string,
      label: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      type: React.PropTypes.string,
      validateOnLive: React.PropTypes.bool
    },

    mixins: [Formsy.Mixin],

    changeValue: function (event) {
      this.setValue(event.currentTarget.value);
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
          'required': !this.isPristine() && this.validateOnLive(this.props.validateOnLive) && this.showRequired(),
          'error': !this.isPristine() && this.validateOnLive(this.props.validateOnLive) && !this.showRequired() && this.showError()
        }
      );

      var errorMessage = this.getErrorMessage();

      return (
        <div className={className}>
          <label htmlFor={this.props.name}>{this.props.label  + (this.isRequired() ? '*' : '')}</label>
          <input name={this.props.name} onChange={this.changeValue} placeholder={this.props.label  + (this.isRequired() ? '*' : '')} type={this.props.type || 'text'} value={this.getValue()}/>
          <span className="Field__error">{errorMessage}</span>
        </div>
      );
    }

  });
}
