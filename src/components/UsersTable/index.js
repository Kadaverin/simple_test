import React, { Fragment } from 'react'
import { withStyles, Paper, Button, IconButton } from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import SmartTable from './../SmartTable'

const fullNameOf = (person) => `${person.firstName} ${person.lastName}`

const styles = theme => ({
  tableWrapper: {
    height: '100%',
    width: '100%',
    minWidth: 500,
    maxWidth: 1000
  },
});


export const UsersTable = ({ users, classes, onCreateUserClick, onEditCLick, onDeleteCLick }) => (
  <Paper className={ classes.tableWrapper }>
    <SmartTable 
      data={ users }
      title='Users list'
      filters={[
        {
          name: 'full name',
          getTarget: (user) => fullNameOf(user),
        }
      ]}
      extra={
        <Button onClick={onCreateUserClick}> Create User </Button>
      }
      columns={[
        {
          name: 'First Name',
          sortable: true,
          dataKey: 'firstName',
        },
        {
          name: 'Last Name',
          sortable: true,
          dataKey: 'lastName',
        },
        {
          name: 'Profession',
          dataKey: 'profession',
        },
        {
          name: 'Age',
          dataKey: 'age',
          numericCell: true,
        },
        {
          name: 'Actions',
          render: (user) => (
            <Fragment>
              <IconButton 
                aria-label="Edit" onCLick={ onEditCLick(user) }>
                <EditIcon fontSize="small" />
              </IconButton>

              <IconButton aria-label="Delete" onClick={ onDeleteCLick(user) }>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Fragment>
          )
        }
      ]}
    />
  </Paper>
)

export default withStyles(styles)(UsersTable)

