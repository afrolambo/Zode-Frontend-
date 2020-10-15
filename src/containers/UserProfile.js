import React from 'react'

class UserProfile extends React.Component {
    state = {
        currentUser: {}, 
        followers: null, 
        following: null
    }

    async componentDidMount (){
            const token = localStorage.getItem("token")
            if (token) {
              fetch("http://localhost:3000/api/v1/profile", {
                method: "GET", 
                headers: { Authorization: `Bearer ${token}` }, 
              })
              .then(resp => resp.json())
              .then(data => this.setState({
                  currentUser: data.user,
                  followers: data.user.followers_qty,
                  following: data.user.following_qty
            }))
            }
    //    await this.getFollowings() && this.getFollows()
    }

    // getFollows = () => {
    //     const getFollowers = fetch(`http://localhost:3000/api/v1/${this.props.user.username}/followers`)
    //     const json = getFollowers.json()
    //     this.setState({followers: json})
    // }

    // getFollowings = () => {
    //     fetch(`http://localhost:3000/api/v1/${this.props.user.username}/followees`)
    //     .then(resp => resp.json())
    //     .then(data => this.setState({following: data}))
    // }
    
    render() {
        console.log(this.state.currentUser)
        let user = this.state.currentUser 
        return(
            // <h1>User Profile</h1> 
            <div className="user-profile">
                <h1>{user.first_name} {user.last_name}</h1>
                <div>
                    <img className="ui medium circular image" alt="profile" src={user.avatar} />
                </div>
                <div className="user-bio">
                    <h2>Bio:</h2>
                    <p>{user.bio}</p>
                </div>
                <div className="user-follows">
                    <h4>Followers{this.state.followers}</h4>
                    <h4>Following{this.state.following}</h4>
                </div>
                <div className="edit-user-info">
                <p> Create a component for editing user info </p>
                     {/* <NavLink exact to=""  */}
                 </div> 
            </div>
        )
    }
}

export default UserProfile