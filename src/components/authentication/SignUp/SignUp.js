import React from 'react';
import './SignUp.css'
import facebook from '../../../assets/icons/facebook.png';
import twitter from '../../../assets/icons/twitter.png';
import google from '../../../assets/icons/google.png';
import * as firebase from 'firebase/app';
import 'firebase/auth'

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:""
    };
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
  };


  signUserIn(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
          console.log(user);
      } else {
        // User is signed out.
        // ...
      }
    });

  }
  getEmail(event) {
    this.setState({email: event.target.value});
  }
  getPassword(event) {
    this.setState({password: event.target.value});
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
                    <input value={this.state.firstname} onChange={this.getFirstname} id="Firstname" type="text" class="validate" />
                    <label for="email">Firstname</label>
                  </div>
                  <div class="input-field col s12 center-align">
                    <input value={this.state.lastname} onChange={this.getLastname} id="Lastname" type="text" class="validate" />
                    <label for="email">Lastname</label>
                  </div>
                  <div class="input-field col s12 center-align">
                    <input value={this.state.phone} onChange={this.getPhone} id="phone" type="text" class="validate" />
                    <label for="email">Phone</label>
                  </div>
                  <div class="input-field col s12 center-align">
                    <input value={this.state.email} onChange={this.getEmail} id="email" type="email" class="validate" />
                    <label for="email">Email</label>
                  </div>
                  <div class="input-field col s12">
                    <input value={this.state.password} onChange={this.getPassword} id="password" type="password" class="validate" />
                    <label for="password">Password</label>
                  </div>
                </div>
              </form>
              <div class="row center-align ">
                <a onClick={() => {this.signUserIn()}} class="waves-effect waves-light btn loginButton">Sign Up</a>

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
