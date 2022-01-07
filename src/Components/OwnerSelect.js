

import * as React from 'react';
import { useState, useEffect } from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import cats from '../data.json';


export function OwnerSelect(props) {

    let ownerArray = [];
    cats.forEach(cat => ownerArray.push(cat.owner_name))

    const [owner, setOwner] = useState("");

    const handleChange = (event) => {
        props.setNewOwnerName(event.target.value);
    };

    useEffect(() => {
        setOwner(props.currentOwner)
    }, [])
    return (

        <FormControl fullWidth>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={owner}
                onChange={handleChange}
            >
                {ownerArray.map((owner, i) => {
                    return <MenuItem value={owner} key={i}>{owner} </MenuItem>
                })}

            </Select>
        </FormControl>



    );
}