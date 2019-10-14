import React from 'react';
import data from '../../assets/Volcanodata.xlsx';
import readXlsxFile from 'read-excel-file';
import Async from 'react-async';

class DataTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data : [],
      wiki: {}
    }


  }

  componentDidMount(){
    this.loadfile();

  };

  sendDataToParent(data){
    this.props.setParentState(data);
  }

  async  loadfile(){
     let blob =   await fetch(data).then(result => result.blob());
     readXlsxFile(blob).then((rows) => {

        this.setState({ data :  rows});

      })
   };



  render(){

  if(this.state.data )
  return(
    <table className="highlight responsive-table  striped">
       <thead>
         <tr>
             <th>Volcano Number</th>
             <th>Name</th>
             <th>Country</th>


         </tr>
       </thead>

       <tbody>
       {

           this.state.data.map(volcano => {

             return(
               <tr key={volcano[0]} onClick={()=>{this.sendDataToParent(volcano)}}>
                <td>{volcano[0]}</td>
                <td>{volcano[1]}</td>
                <td>{volcano[2]}</td>

               </tr>

             )
           })

       }




       </tbody>
     </table>

  );
  else {
    return(<></>)
  }
}
}

export default DataTable;
