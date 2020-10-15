import React, {Component} from 'react'
import UserSelect from '../components/UserSelect'
import OtherProfile from './OtherProfile'
import Search from '../components/Search'
import {Route, Switch, withRouter, Redirect, Link} from 'react-router-dom'

//Change the Switch Component functionality to 
// <Link to={`${match.url}/:userId`}>user.username</Link> 
//Make a fetch to api/v1/:username to componentDidMount inside of the UserProfilePage

class UsersList extends Component {
    state = {
        query: '',
        showUserProfile: false,
        otherUser: null, 
    }

    async componentDidMount(){
        const response = await fetch
    }
    mapUsers = () => {
        return this.props.users.map(user => <UserSelect key={user.id} user={user} selectUser={this.userHandler}/>)
    }

    filterUsers = () => {
        return this.props.users.filter(user => user.username.toLowerCase().includes(this.state.query))
    }

    searchHandler = (e) => {
        this.setState({ query: e.target.value })
    }


    updateState(){
        this.setState({usersList: this.props.users})
    }

    userHandler = (user) => {
        this.setState({
            query: user.username 
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/search', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
                Accepts: 'application/json', 
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }, 
            body: JSON.stringify ({query: this.state.query})
        })
        .then(resp => resp.json())
        .then(data => this.setState({
            showUserProfile: true, 
            otherUser: data
        })
        )
    }

    render() {
        console.log(this.props.users)
        let users = this.filterUsers().map(user => <UserSelect key={user.id} user={user} selectUser={this.userHandler}/> )
        return (
            <>
            {this.state.showUserProfile ? 
            <>
                <OtherProfile user={this.state.otherUser} currentUser={this.props.user}/>
            </> 
            :
            <> 
                <Search submitHandler={this.submitHandler} searchHandler={this.searchHandler} query={this.state.query} />
                <div>
                    {users}
                </div>
            </>
            }
            </>
        )
    }
}

export default withRouter(UsersList)