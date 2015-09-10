var React = require('react');
var PropTypes = React.PropTypes;
var classnames = require('classnames');
var Formsy = require('formsy-react');

var Field = React.createClass({
  propTypes: {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string
  },

  mixins: [Formsy.Mixin],

  changeValue: function (event) {
    this.setValue(event.currentTarget.value);
  },

  render: function () {
    var className = classnames(
      this.props.className,
      'Field',
      {
        'required': this.showRequired(),
        'error': !this.showRequired() && this.showError()
      }
    );

    var errorMessage = this.getErrorMessage();

    return (
      <div className={className}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input name={this.props.name} onChange={this.changeValue} placeholder={this.props.label} type={this.props.type || 'text'} value={this.getValue()}/>
        <span className="Field__error">{errorMessage}</span>
      </div>
    );
  }

});

module.exports = Field;
