import * as React from 'react';
import { Card, Typography } from '@mui/material';
import { increaseViewCount, formatDate } from '../editCatFunctions'

export function CatListItem(props) {

    const catName = props.catList[props.index].name
    const catImage = props.catList[props.index].thumbnail_url
    const catBirthDate = props.catList[props.index].birthdate

    const handleSelect = () => {
        const handleSelectCat = new Promise((resolve, reject) => {
            let catList = increaseViewCount(props.cat.id)
            resolve(catList)
        });

        return handleSelectCat
            .then((catList) => props.setCatList(catList), err => console.error('err', err))
            .then(() => props.setSelectedCat(props.index), err => console.log('error1', err))
            .catch(err => console.log('thisdidnotwork15'))
    };



    return (

        <Card onClick={() => handleSelect()} style={{ alignSelf: ' left', width: 500, height: 200, padding: 30, raised: 'true' }} variant="outlined">
            <div style={{ margin: "auto", display: "flex" }}>
                <div >
                    <img src={catImage} alt={catName} width="100" height="100" />
                </div>
                <div>
                    <Typography >{catName} </Typography>
                    <h3>{formatDate(catBirthDate)}</h3>
                </div>

            </div>
        </Card>
    );
}