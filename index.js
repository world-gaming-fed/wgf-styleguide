'use strict';

module.exports = {
  logic: {
    IfDataExist: require('./lib/components/logic/IfDataExist')
  },
  block: require('./lib'),
  element: {
    button: require('./lib/components/elements/buttons/button/Button'),
    field: require('./lib/components/elements/field/Field'),
    TableList: require('./lib/components/elements/tableList/TableList')
  },
  container: {
    BtnContainer: require('./lib/components/containers/btnContainer/BtnContainer'),
    RenderIf: require('./lib/components/containers/renderIf/RenderIf')
  }
}
