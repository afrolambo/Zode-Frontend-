import React, {Component} from 'react'
import UserSelect from '../components/UserSelect'
import Search from '../components/Search'
import {withRouter} from 'react-router-dom'
import {API_V1} from '../constants'

//Change the Switch Component functionality to 
// <Link to={`${match.url}/:userId`}>user.username</Link> 
//Make a fetch to api/v1/:username to componentDidMount inside of the UserProfilePage

class DiscoverPage extends Component {
    state = {
        query: '',
        otherUser: null, 
        selected: "ALL",
    }

    filterUsers = () => {
        return this.props.users.filter(user => user.username.toLowerCase().includes(this.state.query))
    }

    searchHandler = (e) => {
        this.setState({ query: e.target.value })
    }

    userHandler = (user) => {
        this.setState({
            query: user.username 
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        fetch(`${API_V1}/search`, {
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
        console.log(this)
        let users = this.filterUsers().map(user => <UserSelect key={user.id} user={user} selectUser={this.userHandler}/> )
        return (
            <>
                <Search submitHandler={this.submitHandler} searchHandler={this.searchHandler} query={this.state.query} />
                <div>
                    {users}
                </div>
            
            </>
        )
    }
}

export default withRouter(DiscoverPage)