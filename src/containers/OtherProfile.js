import React from 'react'
import 'semantic-ui-css/semantic.min.css'

class OtherProfile extends React.Component{
    state = {
        currentUser: {}, 
        user: {},
        followers: null,
        following: null
    }

    async componentDidMount() {
       await this.getFollowings() && this.getFollows()
    }

    getFollows = () => {
        const getFollowers =  fetch(`http://localhost:3000/api/v1/${this.props.user.username}/followers`)
        const json = getFollowers.json()
        this.setState({followers: json})
    }

    getFollowings = () => {
        fetch(`http://localhost:3000/api/v1/${this.props.user[0].username}/followees`)
        .then(resp => resp.json())
        .then(data => this.setState({following: data}))
    }

    toggleFollow = async () => {
        let user = this.props.user[0]
        const data = await fetch(`http://localhost:3000/api/v1/togglefollow`,{
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json', 
                Accept: 'application/json', 
                "Authorization": `Bearer ${localStorage.getItem('token')}`
             }, 
             body: JSON.stringify({
                username: user.username, 
             })
        })
        const info = data.json()
        this.setState({
            user: info[0],
            followers: user.followers_qty,
            following: user.following_qty
        })
    }

    handleFollowClick = (e) => {
        e.preventDefault() 
    }

    render() {
        console.log(this.props.user)
        const user = this.props.user[0] 
        
        return(
            <div className="profile_image">
                <h1>{user.first_name} {user.last_name}</h1>
                <div>
                    <img className="ui small circular image" alt="profile" src={user.avatar} />
                </div>
                <div className="user-bio">
                    <h2>Bio:</h2>
                    <p>{user.bio}</p>
                </div>
                <div className="user-follows">
                    <h4>Followers:{user.followers_qty} </h4>
                    <h4>Following:{user.following_qty} </h4>
                    <button onClick={this.toggleFollow}>
                    follow
                    </button>
                </div>
                <div className="edit-user-info">
                <p> Create a component for editing user info </p>
                    {/* <NavLink exact to="" */}
                </div>
            </div>
        )
    }
}

export default OtherProfile