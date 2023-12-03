import React ,{useState}from 'react';
import Box from '@mui/material/Box';
import { DataGrid , GridActionsCellItem} from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Table = ({ data , onDeleteRow , onSelectionChange}) => {
    console.log("egfetufertffeufef",data)


const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 200},
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'role', headerName: 'Role', width: 200 },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    width: 120,
    cellClassName: 'actions',
    getActions: ({ id }) => [
      <GridActionsCellItem
        icon={<EditIcon />}
        label="Edit"
        color="inherit"
      />,
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Delete"
        onClick={() => onDeleteRow(id)}
        color="inherit"
      />,
    ],
  },
];


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
          onSelectionModelChange={onSelectionChange}
      />
    </Box>
    </div>
  );
};

export default Table;
