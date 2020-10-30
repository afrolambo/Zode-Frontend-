import React from 'react'
import {Link} from 'react-router-dom'
import {HOST, SIGN_IMAGES} from '../constants'
import { Container, Grid, Image, Popup, Button, Segment, Row } from 'semantic-ui-react'
import FollowButton from '../components/FollowButton'
import FollowersModal from '../components/FollowersModal'
import FollowingModal from '../components/FollowingModal'
import logo from '../PNG/logo.png'
import signInfoL from '../PNG/signInfoL.png'
import signInfoText from '../PNG/signInfoText.png'
import NavBar from '../components/NavBar'
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
        const id = this.props.match.params.id
        this.getProfile(id)  
    }

    getProfile = (id) => {
        const token = localStorage.getItem("token")
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

    handleClickFollows = (id) => {
        this.getProfile(id)   
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
                    <Grid style={{ height: `190vh` }} >
                        <Grid.Row>
                          <Grid.Column width={6}>
                            <div textAlign="center">
                                <Image alt={user.username} src={user.avatar} size='large' circular/>
                                <h1 className="App">{user.first_name} {user.last_name}</h1>
                            </div>

                            <div>
                            <br/>
                                <Popup
                                    trigger={<Link to={`/zodiac/${sign.id}`}>
                                    {sign ? <Image className="userSign" src={sign.img} alt={sign.name} size="small" circular /> : "loading..."}
                                    </Link>}
                                    style={style}
                                    content={`${sign.the}`}
                                />
                            </div>
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
                                        <div>
                                            <h1 className="App">{followers} <FollowersModal clickHandler={this.handleClickFollows} id={id}>Followers</FollowersModal></h1>
                                        </div>
                                    </Grid.Column>

                                    <Grid.Column width={8}>
                                        <div>
                                            <h1 className="App">{user.following_qty} <FollowingModal clickHandler={this.handleClickFollows} id={id}>Following</FollowingModal></h1>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Segment style={{borderRadius:"0.5"}}>
                                            <h3>Bio:</h3>
                                            <p>{user.bio}</p>
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                          </Grid.Column>
                        </Grid.Row>

                        <Grid.Row textAlign="center" length={5}>
                            <Grid.Column width={5}>
                                <div>
                                    <Link to="/users"> <Button size="large" circular>Explore</Button> </Link>
                                </div>
                            </Grid.Column>

                            {id == me ? 
                                <>
                                    <Grid.Column width={5}>
                                        <div>
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
                                        </div>
                                    </Grid.Column>
                        
                                    <Grid.Column width={5}>
                                        <div>
                                            <Link to="/zodiacForm">
                                                <Button size="large">Edit DOB</Button>
                                            </Link>
                                        </div>
                                    </Grid.Column>
                                
                                </>
                                :
                                <Grid.Column width={11}> 
                                    <div>
                                        <FollowButton onClick={this.toggleFollow}>{this.state.followStatus ?   "Unfollow" : "Follow" }</FollowButton>
                                    </div>
                                </Grid.Column>
                            }
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={5} verticalAlign="bottom">
                                <div>
                                    <Image className="userSign" src={signInfoL} alt="signInfoL" />
                                </div>
                            </Grid.Column>

                            <Grid.Column width={11} length={200}>
                                    <Image className="userSign" src={signInfoText} alt="signInfoText" />
                                <Segment>
                                    <h3>{sign ? sign.name : "loading..."}</h3>
                                    <p>{sign ? sign.about : "loading..."}</p>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={1} length={200}>
                            <br/>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row align="center">
                        <Grid.Column width={16}>
                            <div>
                                <Image className="userSign" src={logo} alt="logo" />
                            </div>
                        </Grid.Column>
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