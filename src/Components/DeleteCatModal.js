import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { deleteCat, getCatList } from '../editCatFunctions'

export function DeleteCatModal(props) {
  console.log('prop i am', props)
  let catList = [];
  function handleSave() {

    const handleDelete = new Promise((resolve, reject) => {
      deleteCat(props.catIndex)
    });

    return handleDelete.then((props.handleClose(), err => console.log('error1')))
      .then((catList = getCatList(), err => console.log('error2')))
      .then(((props.setSelectedCat(0)), err => console.log('err2.5')))
      .then((props.setCatList(catList), err => console.log('error3')))
      .catch(err => console.log('thisdidnotwork'))
  };

  return (

    <Modal open={props.open}>
      <Box
        sx={{
          marginRight: 'auto',
          marginLeft: "auto",
          padding: 30,
          width: 300,
          height: 300,
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: 'white',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Typography> Are you sure you want to delete {props.catList[props.catIndex].name}?</Typography>

        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <Button onClick={() => {
            handleSave()
          }}>Delete</Button>
          <Button onClick={() => {
            props.handleClose();
          }}>Cancel</Button>
        </div>
      </Box>
    </Modal>
  )
}
