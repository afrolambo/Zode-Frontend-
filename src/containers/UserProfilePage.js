import React from 'react'
import {Link} from 'react-router-dom'
import {API_V1, SIGN_IMAGES} from '../constants'

//Use OtherProfile as a template (maybe steal some stuff from there?)
class UserProfilePage extends React.Component {

    state = {
        userProfile: {},
        signs: SIGN_IMAGES 
    }
    
    
    componentDidMount = () => {
        const token = localStorage.getItem("token")
        const id = this.props.match.params.id
        
        fetch(`${API_V1}/users/${id}`, {
            method: 'GET', 
            headers: { Authorization: `Bearer ${token}`} 
        })
        .then(resp => resp.json())
        .then(data => {this.setState({userProfile: data})})
    }

    findSign = () => {
        
        let sign = this.state.signs.find(sign => sign.name === this.state.userProfile.sign)
        console.log(sign)
        return sign
        
    }

    
    render() {
        const user = this.state.userProfile
        let sign = this.findSign()
        console.log(typeof sign)
        return(
            <div>
                {/* {this.state.userProfile ? 
                <> */}
                    <h1> {user.first_name} {user.last_name} </h1>
                    <img src={`${user.avatar}`} alt={`${user.username} profile pic`} />
                    <div>
                        <h2>Bio</h2>
                        <p>{user.bio}</p>
                    </div>

                    <div>
                        <h2>Follows: {user.following_qty}</h2>

                        <h2>Followers: {user.followers_qty}</h2>
                    </div>

                    <div>
                        <h2>{user.username}'s Sign Info:</h2>
                        <h2>{sign ? sign.name : "loading"}</h2>
                    </div>



                <Link to="/users"> <button>Back to Search</button> </Link>
               {/* </>
               :
    
                    <h3>Loading...</h3>


            } */}

            </div>
        )
    }
}

export default UserProfilePage