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
import Grid from '@mui/material/Grid';

export function EditCatDetailsModal(props) {

  console.log('edit', props.catList[props.cat])
  let cat = props.catList[props.cat]

  let newBirthDate = props.catList[props.cat].birthdate;
  let newThumbnailURL = props.catList[props.cat].thumbnail_url;
  let newName = props.catList[props.cat].name;
  let newOwnerName = props.catList[props.cat].owner_name;
  function setNewBirthDate(newBD) {
    newBirthDate = newBD
  }
  function setNewOwnerName(newOwner) {
    newOwnerName = newOwner
  }
  function setNewName(name) {
    newName = name
  }
  function setNewThumbnailURL(thumbnail) {
    newThumbnailURL = thumbnail
  }
  function handleSave(catIndex, newBirthDate, newThumbnailURL, newName, newOwnerName, cat) {
    const handleEdit = new Promise((resolve, reject) => {
      editCatDetails(catIndex, newBirthDate, newThumbnailURL, newName, newOwnerName, cat)
      resolve()

    })


    return handleEdit.then(props.handleClose(), err => console.log('err1', err))
      .then(() => getCatList(), err => console.error('err2'))
      .then((catList) => props.setCatList(catList), err => console.error('err3'))
      // .then(() => props.setSelectedCat({
      //   birthdate: newBirthDate,
      //   id: props.cat.id,
      //   name: newName,
      //   owner_name: newOwnerName,
      //   thumbnail_url: newThumbnailURL,
      //   views_count: props.cat.views_count
      // }), err => console.error('err4'))
      .catch(err => console.error('this did not work 27'))
  }

  return (

    <Modal style={{ paddingTop: 200 }} open={props.open}>
      <Grid
        sx={{
          marginRight: 'auto',
          marginLeft: "auto",
          padding: 10,
          width: 600,
          height: 600,
          backgroundColor: 'white'


        }}
      > <Typography variant="h4" style={{ padding: 5, textAlign: 'Left', marginBottom: 7 }}>Edit Cat</Typography>
        <Grid item xs="auto" style={{ flexDirection: 'row', display: 'flex' }}>
          <Typography style={{ padding: 5, }} >Thumbnail URL</Typography>
          <TextField style={{ padding: 5, }} id="outlined-basic" variant="outlined" onChange={(event) => {
            setNewThumbnailURL(event.target.value)
          }} />
        </Grid>
        <Grid style={{ flexDirection: 'row', display: 'flex', padding: 5 }}>
          <Typography style={{ padding: 5, marginRight: 60 }}>Name</Typography>
          <TextField style={{ padding: 5, }} id="outlined-basic" variant="outlined" onChange={(event) => {

            setNewName(event.target.value)
          }} />
        </Grid>
        <Grid style={{ flexDirection: 'row', display: 'flex', padding: 5 }}>
          <Typography style={{ padding: 5, marginRight: 60 }} > Owner</Typography>
          <OwnerSelect style={{ padding: 5, }} currentOwner={props.cat.owner_name} setNewOwnerName={setNewOwnerName} />

        </Grid>
        <Grid style={{ flexDirection: 'row', display: 'flex', padding: 5 }}>
          <Typography style={{ padding: 5, marginRight: 35 }}>Birth Date</Typography>
          <BirthDatePicker style={{ padding: 5, marginLeft: 30 }} currentBirthDate={newBirthDate} setNewBirthDate={setNewBirthDate} />
        </Grid>

        <div style={{ flexDirection: 'row', display: 'flex', marginLeft: 300, marginTop: 20 }}>
          <Button onClick={() => {
            handleSave(props.cat, newBirthDate, newThumbnailURL, newName, newOwnerName)
          }}>Save</Button>
          <Button onClick={() => {
            props.handleClose();
          }}>Cancel</Button>
        </div>
      </Grid>
    </Modal>



  );
}