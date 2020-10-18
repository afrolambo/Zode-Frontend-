import React from 'react'
import {Link} from 'react-router-dom'
import {API_V1, SIGN_IMAGES} from '../constants'
import { Container, Grid } from 'semantic-ui-react'


//Use OtherProfile as a template (maybe steal some stuff from there?)
class ControllerProfilePage extends React.Component {

    state = {
        userProfile: null,
        signs: SIGN_IMAGES 
    }
    
    async componentDidMount() {
        const token = localStorage.getItem("token")
        const id = this.props.match.params.id
        const me = this.props.userId 
        console.log(id)
        console.log(me)


        if (id == me ){
            // console.log("directing to your profile")
                fetch(`http://localhost:3000/api/v1/profile`, {
                    method: "GET", 
                    headers: { Authorization: `Bearer ${token}` }, 
                })
                .then(resp => resp.json())
                .then(data => this.setState({
                    userProfile: data.user
                }))
            } else {
                console.log("directing to user page")
                fetch(`${API_V1}/${id}`, {
                method: 'GET', 
                headers: { Authorization: `Bearer ${token}`} 
            })
            .then(resp => resp.json())
            .then(data => {this.setState({userProfile: data.user})})
        }    
    }

    findSign = () => {
        if (this.state.userProfile){

            let sign = this.state.signs.find(sign => sign.name === this.state.userProfile.sign)
            return sign
        } 

    }

    
    render() {
        // const user = this.state.userProfile
        const me = this.props.userId
        const id = this.props.match.params.id
        const user = this.state.userProfile
        const sign = this.findSign()
        
        // console.log(me)
        // console.log(id)
        console.log(user)

        return(
            <div>
            <br/>

            {user ? 
                <Container className="user-profile">
                    <Grid>
                        <Grid.Row>
                            <div >
                                <img alt={user.username} src={user.avatar} />
                            </div>
                            <div >
                                <h3>{user.username}</h3>
                            </div>
                            <div>
                                <h3>{user.first_name} {user.last_name}</h3>
                                <p>{user.bio}</p>
                            </div>


                        </Grid.Row>

                        <div>
                            <h3>{user.followers_qty} Followers</h3>
                            <h3>{user.following_qty} Following</h3>
                        </div>

                        <div>
                            <h2>My Sign: </h2>
                            <h3>{sign ? sign.name : "loading..."}</h3>
                            {sign ? <img src={sign.symbol} alt={sign.name} /> : "loading..."}
                        </div>

                        <h2>Edit Profile Info "(Bio + BirthDate)"</h2>
                        <h3>UserSignDescription</h3>
                <Link to="/users"> <button>Back to Search</button> </Link>

                        
                    </Grid>
                </Container>
                
            :
            <>
                <h2>"loading..."</h2>
            </>
            }

            </div>
        )
    }
}

export default ControllerProfilePage