
import React, {Component} from 'react';
import './App.css';
import {Button} from './Button';
import {Banner} from './Banner';
import {Image} from './Image';
import {Footer} from './Footer';
import {Spacer} from './Spacer';
import UserInput from './UserInput';
import UserOutput from './UserOutput';


class App extends Component {

  state = {
    username: 'zachattack'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }


  render(){
  
  return (
    <div>

    <div className="hero">
        <h1>My React App</h1>
        <Button text="Welcome"/>
    </div>

  <Spacer />

  <UserInput
    changed={this.usernameChangedHandler} 
    currentName={this.state.username} />
  <UserOutput UserName={this.state.username} />

  <Spacer />

  <Banner />

  <Spacer />

  <Image />

  <Spacer />

  <Footer />

</div>

);
}
}

export default App;
