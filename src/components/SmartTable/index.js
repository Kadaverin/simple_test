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
    const { data, filterValue } = this.state
    const { filter } = this.props

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
      filter,
      extra,
    } = this.props;

    return (
      <Fragment>
        <TableTitle
          handleSearchInput={ this.handleSearchInput }
          filter={ filter } 
          title={ title }
          extra={ extra }
        /> 
        <Table className={ classes.table } >
          <TableHead>
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
          <TableBody>
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
  columns: PropTypes.arrayOf( PropTypes.shape({
    name: PropTypes.string, // column dispaly name
    dataKey: PropTypes.string, // key for accessing data from data array
    render: PropTypes.string, // custom render cell function,
    sortable: PropTypes.bool,
  })),
  filter: PropTypes.shape({
    name: PropTypes.string.isRequired,
    target: PropTypes.string, // key for accesing filter target value
    getTarget: PropTypes.func, // func that return filter target value
    placeholder: PropTypes.string,
  }),
  data: PropTypes.array,
  extra: PropTypes.node,
  title: PropTypes.node,
};

export default withStyles(styles)(SmartTable);