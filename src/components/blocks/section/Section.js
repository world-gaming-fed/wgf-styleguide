var React = require('react');
var classNames = require('classnames');

var Section = React.createClass({
  displayName: 'Section',

  propTypes: {
    /**
     * Element to put at the right of the title
     */
    additionalInfos: React.PropTypes.element,
    children: React.PropTypes.element,
    /**
     * Because sometimes we need to put a id attribut on our block
     */
    htrmlId: React.PropTypes.string,
    /**
     * BEM modifier: `Section--alt|Section--alt2`
     */
    modifier: React.PropTypes.string,
    /**
     * The title of the section
     */
    title: React.PropTypes.string.isRequired
  },

  render: function() {
    var classes;
    var additionnalInfos;

    if (this.props.modifier) {
      classes = classNames('Section', this.props.modifier);
    }
    else {
      classes = classNames('Section');
    }

    if (this.props.additionalInfos) {
      additionnalInfos = (
        <div className="Section__header__additionalInfos">
          {this.props.additionalInfos}
        </div>
      );
    }

    return (
      <section className={classes} id={this.props.htrmlId}>
        <div className="Section__inner">
          <header className="Section__header">
            <div className="Section__header__title">
              <h2 className="Title">{this.props.title}</h2>
            </div>
            {additionnalInfos}
          </header>
          <div className="Section__content">
            {this.props.children}
          </div>
        </div>
      </section>
    );
  }
});

module.exports = Section;
