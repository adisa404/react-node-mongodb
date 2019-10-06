import React, { Component } from 'react';
class TableHeader extends Component {
  raiseSort = sortBy => {
    const sortOption = { ...this.props.sortOption };
    if (sortOption.sortBy === sortBy) {
      sortOption.sortOrder = sortOption.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      sortOption.sortBy = sortBy;
      sortOption.sortOrder = 'asc';
    }

    this.props.onSort(sortOption);
  };

  renderSortIcon = column => {
    const { sortOption } = this.props;
    if (column.path !== sortOption.sortBy) return null; // not sorted
    if (sortOption.sortOrder === 'asc')
      return <i className='fa fa-sort-asc'></i>;
    return <i className='fa fa-sort-desc'></i>;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              className='clickable'
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
