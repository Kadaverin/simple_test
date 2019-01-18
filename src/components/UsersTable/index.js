import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import UsersTableHead from './users-table-head'

import { 
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from '@material-ui/core';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 10,
    overflowX: 'auto',
    // display: 'flex',
    // justifyContent: 'center',
    minWidth: 500,
    maxWidth: 1000,
    width: '100%'
  },
  table: {
    width: '100%'
  },
});


export const UsersTable = ({users, classes}) => (
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <UsersTableHead />
      <TableBody>
        {users.map( (user, index) => {
          return (
            <TableRow key={index}>
              <TableCell> { user.firstName } </TableCell>
              <TableCell>{ user.lastName }</TableCell>
              <TableCell numeric> { user.age } </TableCell>
              <TableCell> { user.profession } </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </Paper>
)

export default withStyles(styles)(UsersTable)

