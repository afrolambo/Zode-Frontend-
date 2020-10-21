import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import HoroscopeContainer from './HoroscopeContainer'
import {Link } from 'react-router-dom'
import logo from '../PNG/logo.png'

import { Grid, Image, Message, Segment, Button} from 'semantic-ui-react'

class Welcome extends React.Component {
    state = {
        newUser: false
    }

    handleClick = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }

    render() {
        console.log(this.props.user)
        const style={}
        return (
            <> 
                    
                {this.props.user ? 
                    <>
                        <Grid textAlign='center' style={{ height: `90vh` }} verticalAlign="middle">
                            <Grid.Column  style={{maxWidth: 800}}>
                                <div>
                                    <img src={logo} alt={logo}/>
                                </div>
                                {this.props.user.sign?
                                    <HoroscopeContainer user={this.props.user}/>
                                :
                                <Link to='/zodiacForm'>
                                <Button>Find my Sign</Button>
                                </Link>
                                }
                            </Grid.Column>

                        </Grid>
                    </>
                :
                    <>

                        {this.state.newUser ? 
                            <Signup 
                                submitHandler={this.props.signupHandler} 
                                handleClick={this.handleClick}
                            />

                        :

                            <Login 
                                submitHandler={this.props.loginHandler} 
                                handleClick={this.handleClick}
                            />
                            
                        } 
                    </>
                }
                
            </>
        )
    }
}

export default Welcome