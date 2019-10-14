import React from 'react';
import './InformationCard.css';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';


const params = {v: '3.exp', key: 'AIzaSyDp8xAc7-AGEVWNDbfHWLQ-_dYbnH0_Pnc'};

class InformationCard extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      data : this.props.data,
      isDataThere: false,
      descriptionOfVolcano: ""
    };

  }


  componentDidUpdate() {
    if (!this.state.isDataThere || this.state.data!=this.props.data) {
      this.setState({data : this.props.data});
      this.setState({isDataThere : true});
      this.fetchFromWiki(this.props.data[1]);
    }



}
  componentDidMount(){



  }
  fetchFromWiki(MySearchQuery){
     var url = "https://en.wikipedia.org/w/api.php";
     var self = this;
     var params = {
         action: "query",
         prop: "extracts",
         titles: MySearchQuery,
         explaintext:1,
         exintro:1,
         format: "json"
     };

     url = url + "?origin=*";

     Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

     fetch(url)

         .then(function(response){return response.json();})
         .then(function(response) {


               console.log(response.query.pages);
               Object.keys(response.query.pages).map(function(key, index) {

                  self.setState({ descriptionOfVolcano: response.query.pages[key].extract });


                });




         })
         .catch(function(error){console.log(error);});
  }
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }





  render(){

    if (this.props.data) {
      return(

        <div className="row">
        <div className="col s12 m7">
          <div className="card">

            <div className="card-content card noPadding">
              <div>
                <Gmaps
                    width={'100%'}
                    height={'50vh'}
                    lat={this.props.data[8]}
                    lng={this.props.data[9]}
                    zoom={12}
                    loadingMessage={'Be happy'}
                    params={params}
                    onMapCreated={this.onMapCreated}>
                    <Marker
                      lat={this.props.data[8]}
                      lng={this.props.data[9]}
                      draggable={true}
                      onDragEnd={this.onDragEnd} />
                    <InfoWindow
                      lat={this.props.data[8]}
                      lng={this.props.data[9]}
                      content={'This Volcanic structure is here :)'}
                      onCloseClick={this.onCloseClick} />
                    <Circle
                      lat={this.props.data[8]}
                      lng={this.props.data[9]}
                      radius={500}
                      onClick={this.onClick} />
                </Gmaps>
              </div>
              <h3>{this.props.data[1]}</h3>
              <nav>
                <div className="nav-wrapper">
                  <div className="col s12">
                    <a  className="breadcrumb left-align">Latitude: {this.props.data[8]} </a>
                    <a  className="breadcrumb center-align">Longitude: {this.props.data[9]}</a>
                    <a  className="breadcrumb right-align">Elevation (m): {this.props.data[10]}</a>
                  </div>
                </div>
              </nav>
              <div  className="infoContainer ">
                <div className="row">
                  <div className="col s4"><p>Country: {this.props.data[2]}</p></div>
                  <div className="col s4"><p>region: {this.props.data[6]}</p></div>
                  <div className="col s4"><p>sub region: {this.props.data[7]}</p></div>
                </div>
                <div className="row">
                  <div className="col s4"><p>Primary Volcano Type: {this.props.data[3]}</p></div>
                  <div className="col s4"><p>Activity Evidence: {this.props.data[4]}</p></div>
                  <div className="col s4"><p>Last Known Eruption: {this.props.data[5]}</p></div>
                </div>
                <div className="row">
                  <div className="col s6 "><p>Dominant Rock Type: {this.props.data[11]}</p></div>
                  <div className="col s6 "><p>Tectonic Setting: {this.props.data[12]}</p></div>

                </div>

              </div>
              <div className="">
                {this.state.descriptionOfVolcano}
              </div>

            </div>

          </div>
        </div>
      </div>

      );
    }
   else {
     return(<></>);
   }

 }
}

export default InformationCard;
