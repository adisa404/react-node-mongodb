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

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}
            </th>
          ))}
          <th></th>
          <th />
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
