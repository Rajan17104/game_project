import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import GameForm from './GameForm';


export default function FormDialog() {

  const [items, setItems] = React.useState([]);
  const [update, setUpdate] = React.useState(null);


  const handleSubmitData = (data) => {
    console.log(data);

    let rno = Math.floor(Math.random() * 1000);

    let newData = { id: rno, ...data };

    let localdata = JSON.parse(localStorage.getItem("games"));

    console.log(localdata);

    if (localdata === null) {
      localStorage.setItem("games", JSON.stringify([newData]))
      setItems([newData])
    } else {

      if (update) {
        let uData = localdata.map((v) => {
          if (v.id === data.id) {
            return data
          } else {
            return v;
          }
        })
        localStorage.setItem("games", JSON.stringify(uData))
        setItems(uData)
        console.log(uData);
      } else {
        localdata.push(newData)
        localStorage.setItem("games", JSON.stringify(localdata))
        setItems(localdata)
      }
    }

    setUpdate(null);

  };

  const handleDelete = (id) => {
    let localdata = JSON.parse(localStorage.getItem("games"));

    let fdata = localdata.filter((v, i) => v.id !== id)

    localStorage.setItem("games", JSON.stringify(fdata))

    setItems(fdata)
  }

  React.useEffect(() => {
    let localdata = JSON.parse(localStorage.getItem("games"));

    if (localdata !== null) {
      setItems(localdata)
    }

  }, []);




  const handleEdit = (data) => {

    setUpdate(data);
    console.log(data);

  }

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

          <IconButton aria-label="edit" onClick={() => handleEdit(params.row)}>
            <EditIcon />
          </IconButton>
        </>
      ),

    }

  ];

  return (
    <>

      <GameForm onAdd={handleSubmitData} onupdate={update} />

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