import React from 'react';

const TableRow = ({ rowData }) => {
  return (
    <tr>
      <td>{rowData.id}</td>
      <td>{rowData.name}</td>
      <td>{rowData.email}</td>
      <td>{rowData.role}</td>
    </tr>
  );
};

export default TableRow;
