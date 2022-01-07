import * as React from 'react';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import { getCatList } from '../editCatFunctions';

export function SearchBar(props) {

    let cats = getCatList()

    function handleSearch(value) {
        let catSearchList = []
        cats.map((cat => {
            if (cat.name.toLowerCase().includes(value.toLowerCase())) {
                catSearchList.push(cat)
            }

        }))
        if (catSearchList) {
            props.setCatList(catSearchList)
        }
    }

    return (


        <div style={{}}>
            <div >
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <SearchIcon />
                    </Grid>
                    <Grid item>
                        <TextField onChange={(event) => {
                            handleSearch(event.target.value)
                        }} id="" />
                    </Grid>
                </Grid>
            </div>
        </div>



    );
}