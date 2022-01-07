import * as React from 'react';
import { useState } from "react";
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { BirthDatePicker } from './DatePicker';
import { OwnerSelect } from './OwnerSelect';
import Button from '@mui/material/Button';
import { editCatDetails, getCatList } from '../editCatFunctions';

export function EditCatDetailsModal(props) {


  let cat = props.cat
  const [newBirthDate, setNewBirthDate] = useState(cat.birthdate);
  const [newThumbnailURL, setNewThumbnailURL] = useState(cat.thumbnail_url);
  const [newName, setNewName] = useState(cat.name);
  const [newOwnerName, setNewOwnerName] = useState(cat.owner_name);

  function handleSave(catID, newBirthDate, newThumbnailURL, newName, newOwnerName) {
    const handleEdit = new Promise((resolve, reject) => {
      editCatDetails(catID, newBirthDate, newThumbnailURL, newName, newOwnerName)
      resolve()

    })


    return handleEdit.then(props.handleClose(), err => console.log('err1', err))
      .then(() => getCatList(), err => console.error('err2'))
      .then((catList) => props.setCatList(catList), err => console.error('err3'))
      .then(() => props.setSelectedCat({
        birthdate: newBirthDate,
        id: props.cat.id,
        name: newName,
        owner_name: newOwnerName,
        thumbnail_url: newThumbnailURL,
        views_count: props.cat.views_count
      }), err => console.error('err4'))
      .catch(err => console.error('this did not work 27'))
  }

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
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <Typography>Thumbnail URL</Typography>
          <TextField id="outlined-basic" variant="outlined" onChange={(event) => {
            setNewThumbnailURL(event.target.value)
          }} />
        </div>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <Typography>Name</Typography>
          <TextField id="outlined-basic" variant="outlined" onChange={(event) => {
            setNewName(event.target.value)
          }} />
        </div>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <Typography> Owner</Typography>
          <OwnerSelect currentOwner={props.cat.owner_name} setNewOwnerName={setNewOwnerName} />

        </div>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <Typography>Birth Date</Typography>
          <BirthDatePicker currentBirthDate={newBirthDate} setNewBirthDate={setNewBirthDate} />
        </div>

        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <Button onClick={() => {
            handleSave(cat.id, newBirthDate, newThumbnailURL, newName, newOwnerName)
          }}>Save</Button>
          <Button onClick={() => {
            props.handleClose();
          }}>Cancel</Button>
        </div>
      </Box>
    </Modal>



  );
}