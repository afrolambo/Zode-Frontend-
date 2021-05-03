import React, { useState, useEffect } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import HoroscopeContainer from './HoroscopeContainer'
import {Link } from 'react-router-dom'
import logo from '../PNG/logo.png'

import { Grid, Image, Message, Segment, Button} from 'semantic-ui-react'

export default function Welcome ({user, signupHandler, loginHandler}) {
    const [newUser, setNewUser] = useState(false)

    const handleClick = () => {
        setNewUser(!newUser)
    } 
    {
        return (
            <>  
                {user ? 
                    <>
                        <Grid textAlign='center' style={{ height: `100vh` }} verticalAlign="middle">
                            <Grid.Column  style={{maxWidth: 800}}>
                                <div>
                                    <img src={logo} alt={logo}/>
                                </div>
                                {user.sign?
                                    <HoroscopeContainer user={user}/>
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

                        {newUser ? 
                            <Signup 
                                submitHandler={signupHandler} 
                                handleClick={handleClick}
                            />

                        :

                            <Login 
                                submitHandler={loginHandler} 
                                handleClick={handleClick}
                            />
                            
                        } 
                    </>
                }
                
            </>
        )
    }
}