import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
class PasswordReset extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state);
  }
  sendPasswordResetEmail(){
    var actionCodeSettings = {
      url: 'https://www.example.com/?email=user@example.com',
      iOS: {
        bundleId: 'com.example.ios'
      },
      android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
      },
      handleCodeInApp: true
    };
    firebase.auth().sendPasswordResetEmail(
        this.state.email, actionCodeSettings)
        .then(function() {
          // Password reset email sent.
          console.log("sent");
        })
        .catch(function(error) {
          // Error occurred. Inspect error.code.
          console.log(error);
        });
  }


  render(){
    return(
      <div class="row">
        <div class=" card col s12 m6  padding">
          <div class="container open   cardContainer center-align ">
              <h1 class="center-align">Password</h1>

              <form class="col s12">
                <div class="row ">
                  <div class="input-field col s12 center-align">
                    <input value={this.state.email} onChange={this.handleInputChange} id="email" name="email" type="email" class="validate" />
                    <label for="email">Email</label>
                  </div>

                </div>
              </form>
              <div class="row center-align ">
                <a onClick={() => {this.sendPasswordResetEmail()}} class="waves-effect waves-light btn loginButton">Send Reset Email</a>

              </div>



          </div>
        </div>
      </div>

    );
  }
}
export default PasswordReset;
