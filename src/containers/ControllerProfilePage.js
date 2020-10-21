import React from 'react'
import {Link} from 'react-router-dom'
import {HOST, SIGN_IMAGES} from '../constants'
import { Container, Grid, Image, Popup, Button, Segment, Row } from 'semantic-ui-react'
import FollowButton from '../components/FollowButton'
import FollowersModal from '../components/FollowersModal'
import FollowingModal from '../components/FollowingModal'
import logo from '../PNG/logo.png'
class ControllerProfilePage extends React.Component {

    state = {
        userProfile: null,
        signs: SIGN_IMAGES, 
        followStatus: null,
        followingStatus: null, 
        followers: null,
        bio: ""
    }
    
    async componentDidMount() {
        const token = localStorage.getItem("token")
        const id = this.props.match.params.id
        const me = this.props.userId 

        if (id == me ){
                fetch(`${HOST}/profile`, {
                    method: "GET", 
                    headers: { Authorization: `Bearer ${token}` }, 
                })
                .then(resp => resp.json())
                .then(data => this.setState({
                    userProfile: data.user,
                    followers: data.user.followers_qty,
                    bio: data.user.bio

                }))
        } else {
                fetch(`${HOST}/users/${id}`, {
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
        const data = await fetch(`${HOST}/togglefollow`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json', 
                Authorization: `Bearer ${token}`
            }, 
            body: JSON.stringify({id })
        })
    }
    
    render() {
        const me = this.props.userId
        const id = this.props.match.params.id
        const user = this.state.userProfile
        const sign = this.findSign()
        const followers = this.state.followers
        const style = {
            borderRadius: 0,
            opacity: 0.7,
            padding: '1em',
          }
        
        return(
            <div>
            <br/>

            {user ? 
                <Container className="user-profile">
                    <Grid style={{ height: `175vh` }} >
                        <Grid.Row>
                          <Grid.Column width={6}>
                            <Segment textAlign="center">
                                <Image alt={user.username} src={user.avatar} size='large' circular/>
                                <h3>{user.first_name} {user.last_name}</h3>
                            </Segment>

                            <Segment>
                                <Popup
                                    trigger={<Link to={`/zodiac/${sign.id}`}>
                                    {sign ? <Image src={sign.symbol} alt={sign.name} size="medium" circular /> : "loading..."}
                                    </Link>}
                                    style={style}
                                    content={`${sign.the}`}
                                />
                            </Segment>
                          </Grid.Column>

                          <Grid.Column width={10}>

                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Segment textAlign="center" >
                                            <h3>  {user.username}  </h3>
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <Segment>
                                            <h3>{followers} <FollowersModal id={id}>Followers</FollowersModal></h3>
                                        </Segment>
                                    </Grid.Column>

                                    <Grid.Column width={8}>
                                        <Segment>
                                            <h3>{user.following_qty} <FollowingModal id={id}>Following</FollowingModal></h3>
                                            {/* <h3>{user.following_qty} Following</h3> */}
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Segment style={{borderRadius:"0.5"}}>
                                            <h3>My Bio:</h3>
                                            <p>{user.bio}</p>
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                          </Grid.Column>
                        </Grid.Row>

                        <Grid.Row textAlign="center">
                            <Grid.Column width={5}>
                                <Segment>
                                    <Link to="/users"> <Button size="large" circular>Explore</Button> </Link>
                                </Segment>
                            </Grid.Column>

                            {id == me ? 
                                <>
                                    <Grid.Column width={5}>
                                        <Segment>
                                            <Link to={{
                                                pathname: "/edit_profile_info",
                                                state: {
                                                    fromProfile: true, 
                                                    userId: me, 
                                                    bio: user.bio
                                                }
                                                }}>
                                                <Button size="large">Edit Bio</Button>
                                            </Link>
                                        </Segment>
                                    </Grid.Column>
                        
                                    <Grid.Column width={5}>
                                        <Segment>
                                            <Link to="/zodiacForm">
                                                <Button size="large">Edit DOB</Button>
                                            </Link>
                                        </Segment>
                                    </Grid.Column>
                                
                                </>
                                :
                                <Grid.Column width={11}> 
                                    <Segment>
                                        <FollowButton onClick={this.toggleFollow}>{this.state.followStatus ?   "Unfollow" : "Follow" }</FollowButton>
                                    </Segment>
                                </Grid.Column>
                            }
                        </Grid.Row>

                        <Grid.Row>
                            <Segment>
                                <Grid.Column width={16} length={200}>
                                    <h3>Sign Info: </h3>
                                    <h3>{sign ? sign.name : "loading..."}</h3>
                                    <p>{sign ? sign.about : "loading..."}</p>
                                </Grid.Column>
                            </Segment>
                        </Grid.Row>

                        <Grid.Row align="center">
                            <div>
                                <Image src={logo} alt="logo" />
                            </div>
                        </Grid.Row>

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