import logo from './logo.svg';

import './App.css';
import { CatList } from './Components/CatList'
import { CatDetails } from './Components/CatDetails'
import { useState, useEffect } from "react";
import { getCatList, getViewCount } from './editCatFunctions'
import { Typography } from '@mui/material';


function App() {

  const [catList, setCatList] = useState([])
  const [selectedCat, setSelectedCat] = useState(catList[0]);

  useEffect(() => {
    let catList = getCatList();
    setCatList(catList)


  }, [])



  if (catList.length > 0) {

    return (
      <div className="App">
        <div style={{ paddingLeft: 50, flexDirection: 'row', display: 'flex' }}>

          <div style={{ padding: "auto" }}>
            <CatList catList={catList} setSelectedCat={setSelectedCat} setCatList={setCatList} />
          </div>

          <div style={{ width: '600' }}>
            <CatDetails selectedCat={selectedCat} setCatList={setCatList} setSelectedCat={setSelectedCat} />
          </div>



        </div>
      </div>
    );
  }
  else {
    return (
      <Typography>Please Refresh Page</Typography>
    )
  }
}

export default App;
