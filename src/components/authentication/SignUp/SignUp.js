import React from 'react';
import './SignUp.css'
import facebook from '../../../assets/icons/facebook.png';
import twitter from '../../../assets/icons/twitter.png';
import google from '../../../assets/icons/google.png';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Async from 'react-async';

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      firstname:'',
      lastname:'',
      phone:''

    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.writeUserDataInDatabase = this.writeUserDataInDatabase.bind(this);
    this.db = firebase.firestore();
    this.uid = "";
  };


  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state);
  }
  writeUserDataInDatabase(){
    this.db.collection("Users").doc(this.state.uid).set({
        name: this.state.firstname + " " + this.state.lastname,
        email: this.state.email,
        phone: this.state.phone,
        id: this.state.uid
    })
    .then(function() {

        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  };
  async signANewUSerUp(){

    var globalObject = this;
    globalObject.setState({uid :"" });
    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(function(user){
            console.log(user.user.uid);
            globalObject.setState({uid: user.user.uid});
          })
          .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
              } else {
                alert(errorMessage);
              }
              console.log(error);
            });

   this.writeUserDataInDatabase();
    //
  }
  async getUserid(){
    var globalObject = this;
     await firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        globalObject.uid =  user.uid;
        console.log(globalObject.uid);
      }
    });
  }

  render(){
    return(

        <div class="row ">
        <div class=" card col s12 m6  padding">
          <div class="container open   cardContainer center-align ">
              <h1 class="center-align">Sign Up</h1>

              <form class="col s12">
                <div class="row ">
                  <div class="input-field col s12 center-align">
                    <input value={this.state.firstname} onChange={this.handleInputChange} id="Firstname" name="firstname" type="text" class="validate" />
                    <label for="email">Firstname</label>
                  </div>
                  <div class="input-field col s12 center-align">
                    <input value={this.state.lastname} onChange={this.handleInputChange} id="Lastname" name="lastname" type="text" class="validate" />
                    <label for="email">Lastname</label>
                  </div>
                  <div class="input-field col s12 center-align">
                    <input value={this.state.phone} onChange={this.handleInputChange} id="phone" name="phone" type="text" class="validate" />
                    <label for="email">Phone</label>
                  </div>
                  <div class="input-field col s12 center-align">
                    <input value={this.state.email} onChange={this.handleInputChange} id="email" name="email" type="email" class="validate" />
                    <label for="email">Email</label>
                  </div>
                  <div class="input-field col s12">
                    <input value={this.state.password} onChange={this.handleInputChange} id="password" name="password" type="password" class="validate" />
                    <label for="password">Password</label>
                  </div>
                </div>
              </form>
              <div class="row center-align ">
                <a onClick={() => {this.signANewUSerUp()}} class="waves-effect waves-light btn loginButton">Sign Up</a>

              </div>

              <div class="progress">
                <div class="indeterminate"></div>
              </div>

          </div>
          <div class="row">
            <h7 class="text">Already have an account? login</h7>

          </div>

          </div>
        </div>









    );
  }
}

export default SignUp;
