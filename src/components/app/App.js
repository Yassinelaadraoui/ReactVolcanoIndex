import React from 'react';
//import logo from './logo.svg';
import './App.css';
import data from '../../assets/Volcanodata.xlsx';
import readXlsxFile from 'read-excel-file';


 function   App() {

  let blob =[];
async  function loadfile(){
    blob = await fetch(data).then(result => result.blob());
    readXlsxFile(blob).then((rows) => {
      // `rows` is an array of rows
      // each row being an array of cells.
      console.log();
    })
  }
  loadfile();



  return (
    <p>hey</p>
  );
}

export default App;
