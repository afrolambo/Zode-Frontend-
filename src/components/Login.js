import React, { useState, useEffect } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Row} from 'semantic-ui-react'
import welcome from '../PNG/welcome.png'


export default function Login({ handleClick, submitHandler }) {
    const [formData, setFormData] = useState({
         user: {
            username: "", 
            password: "", 
        }
    }) 

    const changeHandler = (e) => {
        setFormData({ [e.target.name]: e.target.value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        submitHandler(formData)
    }
        return (
            <>
            <Grid textAlign='top-center' style={{ height: `100vh` }} verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column style={{maxWidth: 600}}  >
                        <div className="column twelve wide">
                            <Form size='large' style={{maxWidth: 600}} onSubmit={handleSubmit} className="column twelve wide">
                                <Header>
                                        <img size="small" src={welcome} alt="welcome" style={{ height: '70%', width: '70%' }}/>
                                </Header>
                                    <Segment stacked>
                                        <div>
                                            <h3>username</h3>
                                            <input 
                                                className="field" 
                                                type="text" 
                                                name="username" 
                                                placeholder="Username" 
                                                value={formData.user.username} 
                                                onChange={changeHandler} 
                                            />
                                        </div>
                                        <div>
                                            <h3>password</h3>
                                            <input 
                                                className="field" 
                                                type="password" 
                                                name="password" 
                                                placeholder="Password" 
                                                value={formData.user.password} 
                                                onChange={changeHandler} 
                                            />
                                        </div>
                                        <br/>
                                        <Button size="large" type="submit" value="Login">Login</Button>
                                </Segment>
                            </Form>
                            <Message>
                                Don't have an account? <a href='#' onClick={handleClick}> Sign Up</a>
                            </Message>
                        </div>

                    </Grid.Column>
                </Grid.Row> 
            </Grid>
            </>
        )
}