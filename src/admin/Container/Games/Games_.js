import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import GameForm from './GameForm';


export default function FormDialog() {

  const [items, setItems] = React.useState([]);

  const handleAdd = (data) => {
    console.log(data);

    let rno = Math.floor(Math.random() * 1000);

    let newData = { id: rno, ...data };

    let localData = JSON.parse(localStorage.getItem("games"));

    console.log(localData);

    if (localData === null) {
      localStorage.setItem("games", JSON.stringify([newData]))
      setItems([newData])
    } else {
      localData.push(newData)
      localStorage.setItem("games", JSON.stringify(localData))
      setItems(localData)
    }

    handleClose();
    setItems(null);

  };

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("games"));

    if (localData !== null) {
      setItems(localData)
    }

  }, []);


  const handleDelete = (id) => {
    let localData = JSON.parse(localStorage.getItem("games"));

    let fdata = localData.filter((v, i) => v.id !== id)

    localStorage.setItem("games", JSON.stringify(fdata))

    setItems(fdata)
  }

  // const handleEdit = (data) => {
  //   setOpen(true);

  //   formik.setValues(data);

  //   console.log(data);

  // }

  const columns = [

    // { field: 'id', headerName: 'ID', width: 130 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'desc', headerName: 'Description', width: 130 },
    {
      field: 'action',
      headerName: 'Action',
      width: 130,
      renderCell: (params) => (
        <>
          <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>

          {/* <IconButton aria-label="edit" onClick={() => handleEdit(params.row)}>
            <EditIcon />
          </IconButton> */}
        </>
      ),

    }

  ];

  return (
    <>

    <GameForm />
      
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={items}
          columns={columns}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}