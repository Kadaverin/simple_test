import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from '@material-ui/core';

const SmartTableRow = ({ row, columns }) => (
  <TableRow>
    { columns.map((column, index) => (
      <TableCell 
        key={ column.id || index }
        numeric={column.numericCell}
      >
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