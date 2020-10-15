import React, {Component} from 'react';

import NavBar from './components/NavBar'
import Welcome from './containers/Welcome';
import './CSS/App.css';
import Zodiac from './containers/Zodiac'
import {SUN} from './constants'
import UserProfile from './containers/UserProfile'
import Messenger from './containers/Messenger'
import UsersList from './containers/UsersList'
import UserProfilePage from './containers/UserProfilePage'
import SignInfo from './components/SignInfo'

import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

class App extends Component {
  state = {
    currentUser: null,
    users: [],
    conversations: [],
    activeConversation: null,
    sunSigns: [], 
    zodiacSignObj: [
      {
          id: "1", 
          name: "Aries",
          img: "https://www.horoscope.com/images-US/signs/profile-aries.png",
      }, 
      {
          id: "2", 
          name: "Taurus",
          img: "https://www.astrorudrani.com/images/taurus.png",
      },  
      {
          id: "3", 
          name: "Gemini",
          img: "https://www.pngarts.com/files/1/Gemini-PNG-Download-Image-1.png",
      }, 
      {
          id: "4", 
          name: "Cancer",
          img: "https://grabrightnews.com/wp-content/uploads/2018/08/profile-cancer.png",
      }, 
      {
          id: "5", 
          name: "Leo",
          img: "https://www.horoscope.com/images-US/signs/profile-leo.png",
      }, 
      {
          id: "6", 
          name: "Virgo",
          img: "https://images.ctfassets.net/nonm77rtn1g8/5H43vn3wbZkLyiGuvkOB4m/2713f4a19fd54e67f369b192b5ebf69a/Virgo_Sign.png",
      }, 
      {
          id: "7", 
          name: "Libra",
          img: "https://www.psychhub.com.au/wp-content/uploads/2018/08/profile-libra.1-150x150.png",
      }, 
      {
          id: "8", 
          name: "Scorpio",
          img: "https://www.psychhub.com.au/wp-content/uploads/2018/08/profile-scorpio.1-150x150.png",
      }, 
      {
          id: "9", 
          name: "Sagittarius",
          img: "https://www.pngarts.com/files/2/Sagittarius-PNG-Transparent-Image.png",
      }, 
      {
          id: "10", 
          name: "Capricorn",
          img: "https://www.psychhub.com.au/wp-content/uploads/2018/09/profile-capricorn.1-150x150.png",
      }, 
      {
          id: "11", 
          name: "Aquarius",
          img: "https://www.psychhub.com.au/wp-content/uploads/2018/09/profile-aquarius-150x150.png",
      }, 
      {
          id: "12", 
          name: "Pisces",
          img: "https://www.pngkey.com/png/full/82-826985_pisces-facts-pisces-zodiac-sign.png",
      }
    ]
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token")
    if (token) {
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET", 
        headers: { Authorization: `Bearer ${token}` }, 
      })
      .then(resp => resp.json())
      .then(data => this.setState({currentUser: data.user}))
    } else {
      this.props.history.push("/")
    } 
    fetch(SUN)
    .then(resp => resp.json())
    .then(data => this.setState({sunSigns: data}))

    fetch('http://localhost:3000/api/v1/users')
    .then(resp => resp.json())
    .then(data => this.setState({users: data}))
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
    .then(r => r.json())
    .then(data => this.setState({ currentUser: data.user}, () => this.props.history.push('/')))
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
      this.setState({ currentUser: data.user}, () => this.props.history.push("/"))
    })
  }

  logOutHandler = () => {
    localStorage.removeItem("token")
    this.props.history.push("/")
    this.setState({ currentUser: null })
  }

  render() {
    console.log(this.state.currentUser)
    return (
      <div>
        <NavBar user={this.state.currentUser} clickHandler={this.logOutHandler}/>
        <Switch>
          <Route exact path="/" render={()=> <Welcome loginHandler={this.loginHandler} signupHandler={this.signupHandler} user={this.state.currentUser}/> }/>
          <Route exact path="/zodiac" render={() => <Zodiac img={this.state.zodiacSignObj} zodiac={this.state.sunSigns}/>} />
          <Route path="/zodiac/:zodiacName" component={SignInfo}/>
          <Route exact path="/conversations" render={() => <Messenger currentUser={this.state.currentUser}/>} />
          <Route exact path="/userprofile" render={()=> <UserProfile user={this.state.currentUser}/>} />
          <Route exact path="/users" render={()=> <UsersList user={this.state.currentUser} users={this.state.users}/>}/>
          <Route path="/users/:userId" component={UserProfilePage} />
          <Redirect />
        </Switch>
      </div>
    )
  }
}


export default withRouter(App);
