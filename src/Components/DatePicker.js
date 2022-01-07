import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from "react";
export function BirthDatePicker(props) {
    const [value, setValue] = useState(props.currentBirthDate);

    return (

        <form noValidate>
            <TextField
                id="date"
                type="date"
                defaultValue={value}
                onChange={(newValue) => {
                    setValue(newValue.target.value);
                    props.setNewBirthDate(newValue.target.value)

                }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}