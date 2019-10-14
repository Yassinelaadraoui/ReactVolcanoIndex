import React from 'react';
//import logo from './logo.svg';
import './App.css';
import data from '../../assets/Volcanodata.xlsx';
import readXlsxFile from 'read-excel-file';
import Async from 'react-async';
import DataTable from '../DataTable/DataTable';
import InformationCard from '../informationCard/InformationCard';
import LogIn from '../authentication/logIn/LogIn';
import SignUp from '../authentication/SignUp/SignUp';

import firebaseConfig from '../../firebaseConfig';

import * as firebase from 'firebase/app';
import 'firebase/auth';

class App extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                showTable: true
            };
            this.getClickedElement = this.getClickedElement.bind(this);

            try {
                firebase.initializeApp({
                    apiKey: "AIzaSyAOwXw7Q6THZGQJa2Mb9HL8Vo5x5fS090s",
                    authDomain: "authenticationreactcomponent.firebaseapp.com",
                    databaseURL: "https://authenticationreactcomponent.firebaseio.com",
                    projectId: "authenticationreactcomponent",
                    storageBucket: "authenticationreactcomponent.appspot.com",
                    messagingSenderId: "407409228902",
                    appId: "1:407409228902:web:e75a3cec727374557801a7",
                    measurementId: "G-454R8RL9MS"
                  });
              } catch (err) {
                // we skip the "already exists" message which is
                // not an actual error when we're hot-reloading
                if (!/already exists/.test(err.message)) {
                  console.error('Firebase initialization error', err.stack)
                }
            }

            //this.signANewUSerUp();

        }
        signANewUSerUp(){
          firebase.auth().createUserWithEmailAndPassword("yassinelaadraoui@gmail.com", "password").catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
        }


        getClickedElement(clickedVolcano){

          this.setState({
            selectedVolcano : clickedVolcano,
            showTable: false
          });


        }

        /*    function loadfile(){
            return

          }*/



        render() {
            return (
              <>
                <SignUp />
                <LogIn />
                { this.state.showTable ? <DataTable setParentState={this.getClickedElement} />  : null }
                { !this.state.showTable ?<InformationCard data={this.state.selectedVolcano}/ > : null}
              </>
            )


        }
}

export default App;
