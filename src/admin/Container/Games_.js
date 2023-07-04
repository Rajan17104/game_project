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
import EditIcon from '@mui/icons-material/Edit';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [update, setUpdate] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitData = (data) => {
    console.log(data);

    let rno = Math.floor(Math.random() * 1000);

    let newData = { id: rno, ...data };

    let localData = JSON.parse(localStorage.getItem("games"));

    console.log(localData);

    if (localData === null) {
      localStorage.setItem("games", JSON.stringify([newData]))
      setItems([newData])
    } else {
      if (update) {
        let uData = localData.map((v) => {
          if (v.id === data.id) {
            return data;
          } else {
            return v;
          }
        })
        localStorage.setItem("games", JSON.stringify(uData))
        setItems(uData)
      } else {
        localData.push(newData)
        localStorage.setItem("games", JSON.stringify(localData))
        setItems(localData)
      }


    }

    handleClose();
    setUpdate(null);

  };

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("games"));

    if (localData !== null) {
      setItems(localData)
    }

  }, []);


  let cinemaschema = yup.object({
    name: yup.string().required(),
    price: yup.number().required(),
    desc: yup.string().required()
      .test('desc', 'maxmium 3 word allowed.',
        function (val) {
          let arr = val.split(" ")

          if (arr.length > 3) {
            return false
          } else {
            return true
          }
        })
  });

  const formik = useFormik({
    validationSchema: cinemaschema,

    initialValues: {
      name: '',
      price: '',
      desc: ''
    },
    onSubmit: (values, action) => {

      action.resetForm()
      handleSubmitData(values)

    },

  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

  const handleDelete = (id) => {
    let localData = JSON.parse(localStorage.getItem("games"));

    let fdata = localData.filter((v, i) => v.id !== id)

    localStorage.setItem("games", JSON.stringify(fdata))

    setItems(fdata)
  }

  const handleEdit = (data) => {
    setOpen(true);

    formik.setValues(data);

    console.log(data);

    setUpdate(data)

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
      <h1>Games</h1>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Games
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Games</DialogTitle>
        <DialogContent>
          <Formik value={values} >
            <form onSubmit={handleSubmit}>
              <TextField

                margin="dense"
                id="name"
                label="Enter a game name"
                name='name'
                type="text"
                fullWidth
                variant="standard"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : null}  </span>

              <TextField

                margin="dense"
                id="name"
                label="Enter a game Price"
                name='price'
                type="text"
                fullWidth
                variant="standard"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span style={{ color: 'red' }}>{errors.price && touched.price ? errors.price : null} </span>
              <TextField

                margin="dense"
                id="name"
                label="Enter a game description"
                name='desc'
                multiline
                rows={4}
                type="address"
                fullWidth
                variant="standard"
                value={values.desc}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span style={{ color: 'red' }}>{errors.desc && touched.desc ? errors.desc : null} </span>

              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type='submit' >submit</Button>
              </DialogActions>
            </form>
          </Formik>
        </DialogContent>

      </Dialog>

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