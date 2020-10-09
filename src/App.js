import React, {Component} from 'react';

import NavBar from './components/NavBar'
import Welcome from './containers/Welcome';
import Login from './components/Login';
import Signup from './components/Signup'
import './CSS/App.css';
import Zodiac from './containers/Zodiac'
import Profile from './containers/Profile'

import { Route, Switch, withRouter } from 'react-router-dom'

class App extends Component {
  state = {
    user: null
  }

  componentDidMount(){
    const token = localStorage.getItem("token")
    if (token) {
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET", 
        headers: { Authorization: `Bearer ${token}` }, 
      })
      .then(resp => resp.json())
      .then(data => this.setState({user: data.user}))
    } else {
      this.props.history.push("/login")
    }
  }

  signupHandler = (userObj) => {
    console.log(userObj)
    fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ user: userObj })
  })
    .then(r => r.json())
    .then(data => this.setState({ user: data.user}))
    .then(() => this.props.history.push('/'))
  }

  loginHandler = (userInfo) => {
    console.log("logging in", userInfo)
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json', 
        accepts: 'application/json'
      }, 
      body: JSON.stringify({ user: userInfo })
    })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      this.setState({ user: data.user}, () => this.props.history.push("/"))
    })
  }

  logOutHandler = () => {
    localStorage.removeItem("token")
    this.props.history.push("/login")
    this.setState({ user: null })
  }


  render() {
    return (
      <div>
        <NavBar user={this.state.user} clickHandler={this.logOutHandler} />
        <Switch>
          <Route exact path="/" render={()=> <Welcome user={this.state.user} />}/>
          <Route exact path="/Zodiac" component={Zodiac} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" render={() => <Login submitHandler={this.loginHandler} />} />
          <Route exact path="/signup" render={() => <Signup submitHandler={this.signupHandler}/>} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
