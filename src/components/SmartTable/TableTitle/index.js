import React, { Fragment } from 'react'
import {
  Grid,
  Toolbar,
  Divider,
  withStyles,
} from '@material-ui/core';

import styles from './styles'
import SearchInput from './../SearchInput'

const TableTitle = ({ 
  filters, title, extra, classes, handleSearchInput, activeFilter 
}) => {
  
  if(!title && !filters && !extra) return null
  
  let filtersSection = null

  if(activeFilter) {
    const placeholder = activeFilter.placeholder || `Search by ${ activeFilter.name }`

    filtersSection = (
      <Fragment>
        <SearchInput 
          onChange={handleSearchInput} 
          placeholder={placeholder}/>
        <Divider className={ classes.divider }/>
      </Fragment>
    )
  }

  return (
    <Toolbar>
      <Grid container justify='space-between' alignItems='center' wrap='nowrap'>
        <Grid item>
          { title }
        </Grid>

        <Grid 
          item 
          container 
          wrap='nowrap' 
          justify='flex-end'
          alignItems='center'
          className={ classes.extraContainer }
        >
          { filtersSection }
          { extra }
        </Grid>
      </Grid> 
    </Toolbar>
  )
}

export default withStyles(styles)(TableTitle)