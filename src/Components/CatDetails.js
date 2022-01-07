
import * as React from 'react';
import { useState, useEffect } from "react";
import { TextareaAutosize, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { EditCatDetailsModal } from './EditCatDetailsModal';
import { DeleteCatModal } from './DeleteCatModal'
import { getViewCount, getCatList } from '../editCatFunctions';
export function CatDetails(props) {

    let [editCatDetailsModalOpen, setEditCatDetailsModalOpen] = useState(false);
    let [deleteModalOpen, setDeleteModalOpen] = useState(false);
    let [viewsCount, setViewsCount] = useState(0)

    let view;

    useEffect(() => {
        if (props.selectedCat) {

            view = getViewCount(props.selectedCat.id)
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

    const formatDate = (date) => {

        let birthdate = new Date(date)

        return birthdate.toLocaleDateString('en-US')

    }
    if (props.selectedCat) {

        return (


            <div style={{ width: 1200, padding: 20 }}>

                <img src={props.selectedCat.thumbnail_url} alt={props.selectedCat.name} width="500" height="600" padding="0" />
                <Typography>{props.selectedCat.name}</Typography>
                <Typography>{formatDate(props.selectedCat.birthdate)}</Typography>
                <Typography>{props.selectedCat.owner_name}</Typography>
                <Typography>Number of views: {props.selectedCat.views_count}</Typography>
                <DeleteCatModal setCatList={props.setCatList} open={deleteModalOpen} handleClose={handleDeleteModalClose} cat={props.selectedCat} setSelectedCat={props.setSelectedCat} />
                <EditCatDetailsModal setSelectedCat={props.setSelectedCat} setCatList={props.setCatList} open={editCatDetailsModalOpen} cat={props.selectedCat} handleClose={handleClose} />
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