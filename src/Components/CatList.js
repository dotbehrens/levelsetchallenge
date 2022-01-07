
import * as React from 'react';
import { useState, useEffect } from "react";
import { CatListItem } from "./CatListItem";
import { SearchBar } from "./SearchBar";
import { Card } from '@mui/material';
import { checkCatArray, getCatList } from '../editCatFunctions'

export function CatList(props) {


  const cats = props.catList



  return (
    <div style={{ alignSelf: 'left', }}>
      <div style={{ alignSelf: 'center', marginRight: "auto" }}>
        <Card style={{ alignSelf: ' left', width: 500, height: 200, padding: 30 }}>

          <SearchBar setCatList={props.setCatList} />
        </Card>
      </div>
      <div>

        {cats.map((cat, i) => {
          return <CatListItem cat={cat} index={i} key={i} setSelectedCat={props.setSelectedCat} setCatList={props.setCatList} catList={props.catList} />
        })}
      </div>
    </div>
  )
}