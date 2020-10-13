import React, {Component} from 'react';

import NavBar from './components/NavBar'
import Welcome from './containers/Welcome';
import Login from './components/Login';
import Signup from './components/Signup'
import './CSS/App.css';
import Zodiac from './containers/Zodiac'
import {SUN} from './constants'
import UserProfile from './containers/UserProfile'
import Messages from './containers/Messages'
import SearchAllUsers from './containers/SearchAllUsers'

import { Route, Switch, withRouter } from 'react-router-dom'
import { ModalActions } from 'semantic-ui-react';

class App extends Component {
  state = {
    user: null,
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
          img: "https://lh3.googleusercontent.com/proxy/lpziPboC_i4Ljird7tLFLaOlIiO_pnIjkNQwWTv1AztMtKdSRW-XgXBV3HWc4McagQxUTY9fyIF3c8pcQiLyhqFS7aDWk-850HFDW44X3PxxZABltAbQ8JBq5HieL3cCegWF",
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
          img: "https://lh3.googleusercontent.com/proxy/96RTQJWtpidAGNkzuUcAkMqJ5lsRyPf9DDeFsxJaN7YQMcfOvgjuF_UGZeD1ZK2fh1bx8a5JOV92eHPiY4hxgl6aeDj89YO7UrQG",
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
      .then(data => this.setState({user: data.user}))
    } else {
      this.props.history.push("/login")
    } 
    fetch(SUN)
    .then(resp => resp.json())
    .then(data => this.setState({sunSigns: data}))
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
    console.log("click")
    localStorage.removeItem("token")
    this.props.history.push("/login")
    this.setState({ user: null })
  }

  render() {
    console.log(this.state.sunSigns)
    return (
      <div>
        <NavBar user={this.state.user} clickHandler={this.logOutHandler}/>
        <Switch>
          <Route exact path="/" render={()=> <Welcome user={this.state.user}/> }/>
          <Route exact path="/zodiac" render={() => <Zodiac img={this.state.zodiacSignObj} zodiac={this.state.sunSigns}/>} />
          <Route exact path="/messages" render={() => <Messages user={this.state.user}/>} />
          <Route exact path="/userprofile" render={()=> <UserProfile user={this.state.user}/>} />
          <Route exact path="/users" render={()=> <SearchAllUsers user={this.state.user}/>} />
          <Route exact path="/login" render={()=> <Login submitHandler={this.loginHandler}/>} />
          <Route exact path="/signup" render={()=> <Signup submitHandler={this.signupHandler}/>} />
        </Switch>
      </div>
    )
  }
}


export default withRouter(App);
