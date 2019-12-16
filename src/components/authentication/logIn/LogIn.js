import React from 'react';
import './LogIn.css'
import facebook from '../../../assets/icons/facebook.png';
import twitter from '../../../assets/icons/twitter.png';
import google from '../../../assets/icons/google.png';
import * as firebase from 'firebase/app';
import 'firebase/auth'

class LogIn extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    
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
  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state);
  }

  render(){
    return(

        <div class="row ">
        <div class=" card col s12 m6  padding">
          <div class="container open   cardContainer center-align ">
              <h1 class="center-align">Login</h1>

              <form class="col s12">
                <div class="row ">
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
                <a onClick={() => {this.signUserIn()}} class="waves-effect waves-light btn loginButton">Sign Up</a>

              </div>

              <div class="progress">
                <div class="indeterminate"></div>
              </div>

          </div>
          <div class="padding">
            <div class="LoginWithTitle left-align">Login with</div>
            <div class="center-align row">
               <div class="col s4">
                <img width="50px" src={facebook} />
               </div>
               <div class="col s4">
                <img width="50px" src={twitter} />
               </div>
               <div class="col s4">
                <img  width="50px" src={google} />
               </div>
            </div>
            <div class="row">
              <h7 class="text">Don’t have an Account?</h7>
              <br/>
              <h7 class="text">Forgot your password?</h7>
            </div>
          </div>
          </div>
        </div>









    );
  }
}

export default LogIn;
