import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Toolbar,
  Divider,
  withStyles,
} from '@material-ui/core';

import styles from './styles'
import SearchInput from './../SearchInput'

const TableTitle = ({ 
  filter, title, extra, classes, handleSearchInput, 
}) => {
  
  if(!title && !filter && !extra) return null
  
  let filtersSection = null

  if(filter) {
    const placeholder = filter.placeholder || `Search by ${ filter.name }`

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

TableTitle.propTypes = {
  filter: PropTypes.object,
  title: PropTypes.node,
  extra: PropTypes.node,
  classes: PropTypes.object,
  handleSearchInput: PropTypes.func.isRequired,
  activeFilter: PropTypes.object
}

export default withStyles(styles)(TableTitle)