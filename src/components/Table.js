import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 200},
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'role', headerName: 'Role', width: 200 },

  
];

const Table = ({ data }) => {
    console.log("egfetufertffeufef",data)
  

  return (
    <div style={{ height: 'fit-content', width: '100%' }}>
      <Box sx={{ height: 'fit-content', width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
      />
    </Box>
    </div>
  );
};

export default Table;
