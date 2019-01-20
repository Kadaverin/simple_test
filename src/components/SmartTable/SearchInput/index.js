import React from 'react'
import styles from './styles'
import SearchIcon  from '@material-ui/icons/Search'
import {
  Input,
  withStyles,
} from '@material-ui/core'


const SearchInput = ({ classes, ...inputProps }) => (
  <div className={classes.root} elevation={1}>
    <Input 
      className={classes.input}
      endAdornment={
        <SearchIcon className={classes.searchIcon}/>
      }
      {...inputProps}
    />
  </div>
)

export default withStyles(styles)(SearchInput)