import React from 'react';
import edit from '../../../assets/icons/edit.png'
class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };

  }
  render(){
    return(
      <div>

        <div class="row ">
        <div class=" card col s12 m6  padding">

          <div class="container open   cardContainer center-align ">
              <h1 class="center-align">my profile</h1>

              <form class="col s12">
                <div class="row ">

<ul class="collapsible">
  <li>
    <div class="collapsible-header">
      <i class="material-icons">filter_drama</i>
      First
      <span class="new badge">4</span></div>
    <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
  </li>
  <li>
    <div class="collapsible-header">
      <i class="material-icons">place</i>
      Second
      <span class="badge">1</span></div>
    <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
  </li>
</ul>
                <div>
                  <table>
                    <thead>

                    </thead>

                    <tbody>
                      <tr>
                        <td>name</td>
                        <td>Eclair</td>
                        <td><img src={edit} /></td>
                      </tr>
                      <tr>
                        <td>Alan</td>
                        <td>Jellybean</td>
                        <td><img src={edit} /></td>
                      </tr>
                      <tr>
                        <td>Jonathan</td>
                        <td>Lollipop</td>
                        <td><img src={edit} /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

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
      </div>
    )
  }
}

export default Profile;
