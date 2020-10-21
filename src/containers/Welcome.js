import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import logo from '../PNG/logo.png'

import { Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'




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
        const style={}
        return (
            <> 

                        {/* <h1 className="App"> Welcome to Zode</h1> */}
                    
                {this.props.user ? 
                <>
                    <Grid textAlign='center' style={{ height: `90vh` }} verticalAlign="middle">
                        <div>
                            <img src={logo} alt={logo}/>
                        </div>
                    </Grid>
                    
                </>
                :
                <>
                    {this.state.newUser ? 

                        <Signup submitHandler={this.props.signupHandler} handleClick={this.handleClick}/>

                    :

                        <Login submitHandler={this.props.loginHandler} handleClick={this.handleClick}/>
                        
                    } 
                </>
                }

                
            </>
        )
    }
}

export default Welcome