'use strict';

import React from 'react';
import TableList from './TableList';

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'TableList',
    description: 'Created to display a list of player.',
    code: `
<TableList colWidth="auto;10%">
  <tr>
    <td>Add table content</td>
    <td>test</td>
  </tr>
</TableList>
    `,
    exampleComponent: TableList
  }

  render () {
    return (
      <TableList className="classIsApplied" colWidth="auto;10%">
        <tr>
          <td>test</td>
          <td>test</td>
        </tr>
        <tr>
          <td>test</td>
          <td>test</td>
        </tr>
        <tr>
          <td>test</td>
          <td>test</td>
        </tr>
        <tr>
          <td>test</td>
          <td>test</td>
        </tr>
      </TableList>
    );
  }
}
