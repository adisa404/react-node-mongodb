import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({ data, onSort, sortOption, columns }) => {
  return (
    <table className='table'>
      <TableHeader columns={columns} sortOption={sortOption} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
