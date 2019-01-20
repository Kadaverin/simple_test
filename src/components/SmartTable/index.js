import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  Table, 
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';
import { withStyles, TableSortLabel } from '@material-ui/core'

import SmartTableRow from './SmartTableRow'
import TableTitle from './TableTitle'
import styles from './utils/styles'
import sortFunc from './utils/sortFunc'
import defaultFilterFunc from './utils/defaultFilterFunc'

class SmartTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      filter: (props.filters || [])[0],
      filterValue: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
    });
  }

  isAscOrder = (orderBy) => this.state[ `asc by ${orderBy}` ]

  handleSortClick = (orderBy) => (e) => {
    const { data, } = this.state

    const isAsc = this.isAscOrder(orderBy)

    const sortedData = data.sort((a, b) => sortFunc(a, b, orderBy));

    if (!isAsc) { sortedData.reverse() }

    this.setState({
      data: sortedData,
      [`asc by ${orderBy}`]: !isAsc,
    });
  }

  handleSearchInput = ({ target }) => {
    let value = target.value.trim()
    if( value === this.state.filterValue ) return

    this.setState({
      filterValue: value,
    })
  }

  processedData = () => {
    const { filter, data, filterValue } = this.state
    if (!filter) return data 

    let filterStategy = filter.filterFunc || defaultFilterFunc

    const filteredData = data.filter(
      obj => filterStategy(obj, filterValue, filter)
    )

    return filteredData
  }

  render() {
    const {
      columns,
      classes,
      title,
      filters,
      extra,
    } = this.props;

    const { filter, } = this.state;

    return (
      <Fragment>
        <TableTitle
          handleSearchInput={ this.handleSearchInput }
          activeFilter={ filter }
          filters={ filters } 
          title={ title }
          extra={ extra }
        /> 
        <Table
          className={ classes.table }
          selectable={ false }
        >
          <TableHead
            displaySelectAll={ false }
            adjustForCheckbox={ false }
          >
            <TableRow>
              { columns && columns.map((column, index) => (
                <TableCell 
                  key={ column.id || index } 
                  numeric={column.numericCell}
                >
                  <div className={ classes.columnColumn }>
                    { column.name }
                    { column.sortable &&
                      <TableSortLabel
                        active
                        direction={ this.isAscOrder(column.dataKey) ? 'asc' : 'desc' }
                        className={ classes.sortIcon }
                        onMouseUp={ this.handleSortClick(column.dataKey) }
                      />
                    }
                  </div>
                </TableCell>
              )) }
            </TableRow>
          </TableHead>
          <TableBody
            showRowHover
            stripedRows
            displayRowCheckbox={ false }
            preScanRows
          >
            {
              this.processedData().map((row, index) => (
                <SmartTableRow
                  key={ row.id || index }
                  row={ row }
                  columns={ columns }
                />
              ))
            }
          </TableBody>
        </Table>
      </Fragment>
    );
  }
}

SmartTable.defaultProps = {
  limit: 40,
  data: [],
  isLoading: false
}

SmartTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default withStyles(styles)(SmartTable);