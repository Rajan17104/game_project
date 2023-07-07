import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';

function GameForm({onAdd ,onupdate}) {
    
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if(onupdate){

      formik.setValues(onupdate);
      handleClickOpen()

    }
  },[onupdate])

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
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
      // handleSubmitData(values)
      action.resetForm()
      onAdd(values);
      handleClose();
    },

  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

    return (
        <>
            <h1>Games</h1>
            <Button variant="outlined" onClick={handleClickOpen} style={{backgroundColor:'#1976D2' , color:'#fff'}}>
                Add Games 
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Games</DialogTitle>
                <DialogContent>
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
                </DialogContent>

            </Dialog>
        </>
    );
}

export default GameForm;