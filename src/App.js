import React, {Component} from 'react';

import NavBar from './components/NavBar'
import Welcome from './containers/Welcome';
import './CSS/App.css';
import Zodiac from './containers/Zodiac'
import {SIGN_IMAGES} from './constants'

import Messenger from './containers/Messenger'
import DiscoverPage from './containers/DiscoverPage'
import ControllerProfilePage from './containers/ControllerProfilePage'
import SignInfo from './components/SignInfo'
import ZodiacFormContainer from './components/ZodiacFormContainer'
// import EditProfile from './containers/EditProfile'

import { Route, Switch, withRouter, Navigation } from 'react-router-dom'

class App extends Component {
  state = {
    currentUser: null,
    users: [],
    conversations: [],
    activeConversation: null,
    zodiacSignObj: SIGN_IMAGES, 
    id: null
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token")
    if (token) {
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET", 
        headers: { Authorization: `Bearer ${token}` }, 
      })
      .then(resp => resp.json())
      .then(data => 
         this.setState({
        currentUser: data.user, 
        id: data.user.id
        })
      )
    } else {
      this.props.history.push("/")
    } 
    fetch('http://localhost:3000/api/v1/users')
    .then(resp => resp.json())
    .then(data => 
      this.setState({
      users: data
    })
      )
  }

  signupHandler = (userObj) => {
    fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ user: userObj })
  })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      this.setState({ 
        currentUser: data.user,
        id: data.user.id
      }
      ,() => this.props.history.push('/zodiacForm')
        )
    })
  }

  loginHandler = (userInfo) => {
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
      this.setState({ 
        currentUser: data.user, 
        id: data.user.id
      }, () => this.props.history.push("/", true))
    }
    )

  }

  logOutHandler = () => {
    console.log("logging out...")
    localStorage.removeItem("token")
    this.props.history.push("/")
    this.setState({ 
      currentUser: null,
      id: null

     })
  }

  render() {
    // const {id, username} = this.state.currentUser
   console.log(this.state.currentUser)
    
    return (
      <div>

          <NavBar user={this.state.currentUser} id={this.state.id} clickHandler={this.logOutHandler}/>
          <Switch>
            <Route exact path="/" render={()=> <Welcome loginHandler={this.loginHandler} signupHandler={this.signupHandler} user={this.state.currentUser}/> }/>
            <Route exact path="/zodiac" render={() => <Zodiac img={this.state.zodiacSignObj} />} />
            <Route path="/zodiac/:id" component={SignInfo}/>
            <Route exact path="/zodiacForm" component={ZodiacFormContainer} />
            <Route exact path="/conversations" render={() => <Messenger currentUser={this.state.currentUser}/>} />
            <Route path="/users/:id" render={({match, props}) => <ControllerProfilePage userId={this.state.id} props={props} match={match}/>} user={this.state.currentUser}/>
            <Route exact path="/users" render={()=> <DiscoverPage user={this.state.currentUser} users={this.state.users}/>}/>
            {/* <Route exact path="/edit_profile_info" render={() => <EditProfile /> } /> */}
          </Switch>

      </div>
    )
  }
}


export default withRouter(App);
