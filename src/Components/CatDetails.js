
import * as React from 'react';
import { useState, useEffect } from "react";
import { TextareaAutosize, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { EditCatDetailsModal } from './EditCatDetailsModal';
import { DeleteCatModal } from './DeleteCatModal'
import { getViewCount, getCatList, formatDate } from '../editCatFunctions';
export function CatDetails(props) {



    const cat = props.catList[props.selectedCat]
    // console.log('catbirthdat', cat.birthdate)


    let [editCatDetailsModalOpen, setEditCatDetailsModalOpen] = useState(false);
    let [deleteModalOpen, setDeleteModalOpen] = useState(false);
    let [viewsCount, setViewsCount] = useState(0)

    let view;

    useEffect(() => {
        if (cat) {

            view = getViewCount(props.catList[props.selectedCat].id)
            setViewsCount(view)
        }
        formatDate()
        let catList = getCatList()
        props.setCatList(catList)

    }, [])

    const handleOpen = () => {
        setEditCatDetailsModalOpen(true);
    }
    const handleClose = () => {
        setEditCatDetailsModalOpen(false);
    }
    const handleDeleteModalOpen = () => {
        setDeleteModalOpen(true)
    }
    const handleDeleteModalClose = () => {
        setDeleteModalOpen(false)
    }


    if (props.catList[props.selectedCat]) {

        return (


            <div style={{ width: 1200, padding: 20 }}>

                <img src={cat.thumbnail_url} alt={cat.name} width="500" height="600" padding="0" />
                <Typography>{cat.name}</Typography>
                <Typography>{formatDate(cat.birthdate)}</Typography>
                <Typography>{cat.owner_name}</Typography>
                <Typography>Number of views: {cat.views_count}</Typography>
                <DeleteCatModal setCatList={props.setCatList} open={deleteModalOpen} handleClose={handleDeleteModalClose} catIndex={props.selectedCat} setSelectedCat={props.setSelectedCat} catList={props.catList} />
                <EditCatDetailsModal setSelectedCat={props.setSelectedCat} setCatList={props.setCatList} open={editCatDetailsModalOpen} cat={props.selectedCat} handleClose={handleClose} catList={props.catList} />
                <Button onClick={() => {
                    handleOpen();
                }} variant="outlined">Edit</Button>
                <Button onClick={() => {
                    handleDeleteModalOpen();
                }}>Delete</Button>

            </div>
        )
    } else {
        return (

            <div>Select Cat To View Details</div>
        )
    }




}