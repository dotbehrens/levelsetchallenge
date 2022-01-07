import * as React from 'react';
import { Card } from '@mui/material';
import { increaseViewCount, getViewCount, getCatList } from '../editCatFunctions'
import Button from '@mui/material/Button';

export function CatListItem(props) {


    const handleSelect = () => {

        const handleSelectCat = new Promise((resolve, reject) => {
            let catList = increaseViewCount(props.cat.id)
            resolve(catList)
        });

        return handleSelectCat
            .then((catList) => props.setCatList(catList), err => console.error('err', err))
            .then(() => props.setSelectedCat(props.cat), err => console.log('error1', err))
            .catch(err => console.log('thisdidnotwork15'))
    };
    const formatDate = (date) => {
        let birthdate = new Date(date)
        return birthdate.toLocaleDateString('en-US')
    }


    return (

        <Card onClick={() => handleSelect()} style={{ alignSelf: ' left', width: 500, height: 200, padding: 30, raised: 'true' }} variant="outlined">
            <div style={{ margin: "auto", display: "flex" }}>
                <div >
                    <img src={props.cat.thumbnail_url} alt={props.cat.name} width="100" height="100" />
                </div>
                <div>
                    <Button >{props.cat.name} </Button>
                    <h3>{formatDate(props.cat.birthdate)}</h3>
                </div>

            </div>
        </Card>
    );
}