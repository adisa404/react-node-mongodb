import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = props => {
  const { data, onSort, sortOption, columns } = props;
  return (
    <table className='table'>
      <TableHeader columns={columns} sortOption={sortOption} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
