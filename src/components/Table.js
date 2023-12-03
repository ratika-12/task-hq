import React ,{useState}from 'react';
import Box from '@mui/material/Box';
import { DataGrid , GridActionsCellItem} from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #010',
    boxShadow: 4,
    p: 4,
  };

const Table = ({ data , onDeleteRow , onSelectionChange}) => {
    console.log("egfetufertffeufef",data)
   const [open, setOpen] = useState(false);
  const [selectedDataId, setSelectedDataId] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  
    const handleOpen = (id) => {
      setOpen(true)
      setSelectedDataId(id);
    };
    const handleClose = () => setOpen(false);
// handle update
const handleUpdate = (id) => {
    data[id].name = name;
    data[id].email = email;
    data[id].role = role;
    handleClose();
    setName("")
    setEmail("")
    setRole("")
  }

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
        onClick={()=>handleOpen(id)}
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
          onCellClick={onSelectionChange}
      />
    </Box>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit here
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <div>
            <p>Name :</p>
            <input 
            type='text' 
            value={name ? name : data[selectedDataId-1]?.name}
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <p>Email :</p>
            <input 
            type='email' 
            value={email ? email: data[selectedDataId-1]?.email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p>Role :</p>
            <select onChange={(e) => setRole(e.target.value)}>
              <option value="admin" default>Admin</option>
              <option value="member">Member</option>
            </select>
          </div>
          <div>
            <button onClick={()=> handleUpdate(selectedDataId-1)}>
              Update
            </button>
          </div>
        </Typography>
      </Box>
    </Modal>
    </div>
  );
};

export default Table;
