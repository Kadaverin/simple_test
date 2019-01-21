import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from '@material-ui/core';

const validate = (render, dataKey) => {
  if( !render && ! dataKey) {
    throw new Error ('"render" od "dataKey" fild must be provided for column item')
  }
}

const SmartTableRow = ({ row, columns }) => (
  <TableRow>
    { columns.map((column, index) => (
      <TableCell 
        key={ column.id || index }
        numeric={column.numericCell}
      >
        { validate(column.render, column.dataKey) }
        { 
          column.render 
            ? column.render(row)
            : row[column.dataKey]
        }
      </TableCell>
    )) }
  </TableRow>
)

SmartTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired
};

export default SmartTableRow;