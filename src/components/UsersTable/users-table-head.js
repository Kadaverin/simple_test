import React from 'react'
import { 
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const UserTableHead = (props) => (
  <TableHead>
    <TableRow>
      <TableCell> First Name </TableCell>
      <TableCell> Last Name</TableCell>
      <TableCell numeric> Age </TableCell>
      <TableCell> Profession </TableCell>
    </TableRow>
  </TableHead>
)

export default UserTableHead