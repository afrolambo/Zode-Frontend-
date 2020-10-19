import React from 'react'
import {Link} from 'react-router-dom'
import {API_V1, SIGN_IMAGES} from '../constants'
import { Container, Grid, Image } from 'semantic-ui-react'
import FollowButton from '../components/FollowButton'
class ControllerProfilePage extends React.Component {

    state = {
        userProfile: null,
        signs: SIGN_IMAGES, 
        followStatus: null,
        followingStatus: null, 
        followers: null
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
                    userProfile: data.user,
                    followers: data.user.followers_qty

                }))
            } else {
                console.log("directing to user page")
                fetch(`${API_V1}/users/${id}`, {
                method: 'GET', 
                headers: { Authorization: `Bearer ${token}`} 
            })
            .then(resp => resp.json())
            .then(data => 
                this.setState({
                userProfile: data.user, 
                followStatus: data.user.followed_by_current_user, 
                followers: data.user.followers_qty
            })
            )
        }    
    }

    findSign = () => {
        if (this.state.userProfile){

            let sign = this.state.signs.find(sign => sign.name === this.state.userProfile.sign)
            return sign
        } 

    }

    toggleFollow = async (e) => {
        console.log(e.target.innerHTML, this.state.followers)
        let add = this.state.followers + 1
        let subtract = this.state.followers - 1
        let setter 

        if(e.target.innerHTML == "Follow"){
            setter = add
        } else {
            setter = subtract
        }

        this.setState({
            followStatus: !this.state.followStatus,
            followers: setter

        })

        const token = localStorage.getItem("token")
        let user = this.state.userProfile
        let id = user.id
        const data = await fetch(`${API_V1}/togglefollow`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json', 
                Authorization: `Bearer ${token}`
            }, 
            body: JSON.stringify({
                id
            })
        })
        // const info = data.json()
        // this.setState({
        //     userProfile: info
        // })
    }

    handleFollowClick = (e) => {
        e.preventDefault()
    }
    
    render() {
        // const user = this.state.userProfile
        const me = this.props.userId
        const id = this.props.match.params.id
        const user = this.state.userProfile
        const sign = this.findSign()
        const followers = this.state.followers
        
        console.log(user)

        return(
            <div>
            <br/>

            {user ? 
                <Container className="user-profile">
                    <Grid>
                        <Grid.Row>
                            <div >
                                <Image alt={user.username} src={user.avatar} size='medium' />
                            </div>
                            <div >
                                <h3>  {user.username}  </h3>
                            </div>
                            
                            
                            <div>
                                {id == me ? 
                                    <div>
                        
                                        {/* <Link to="/edit_profile_info"> */}
                                            <button>Edit Profile</button>
                                        {/* </Link> */}

                                        <Link to="/zodiacForm">
                                            <button>Edit birth time</button>
                                        </Link>
                                    
                                    </div>
                                    :

                                    <FollowButton onClick={this.toggleFollow}>{this.state.followStatus ?   "Unfollow" : "Follow" }</FollowButton>
                                }

                            </div>

                            <Link to="/users"> <button>Back to Search</button> </Link>



                        </Grid.Row>
                        <Grid.Row>
                            <div>
                                <h3>{followers} Followers</h3>
                            </div>
                            <div>
                                <h3>{user.following_qty} Following</h3>
                            </div>
                        </Grid.Row>
                        <Grid.Row>
                            <div>
                                <h3>{user.first_name} {user.last_name}</h3>
                                <p>{user.bio}</p>
                            </div>
                        </Grid.Row>

                        <div>
                            <h2>My Sign: </h2>
                            <h3>{sign ? sign.name : "loading..."}</h3>
                            <Link to="/`zodiac/${image.id}`">
                            {sign ? <Image src={sign.symbol} alt={sign.name} size="small" /> : "loading..."}
                            </Link>
                        </div>

                        <h3>UserSignDescription</h3>

                        
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