import React, {useState, useEffect} from 'react'
import { Button, Form, Grid, Image, Message, Segment, Row} from 'semantic-ui-react'
import createAccount from '../PNG/createAccount.png'

export default function SignUp({ submitHandler, handleClick }){
    const [formData, setFormData] = useState({
     user: {
         username: "", 
            password: "", 
            email:"", 
            first_name: "", 
            last_name: "", 
            birthdate: "", 
            birth_time: "", 
            birth_location: "", 
            avatar: "https://norrismgmt.com/wp-content/uploads/2020/05/24-248253_user-profile-default-image-png-clipart-png-download.png", 
            bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu", 
            sign: '', 
    }
    })

    const changeHandler = e => {
        const {name, value} = e.target 
        setFormData({
         user: {
            ...FormData.user, 
            [name]: value
        }
        })
    } 

    const handleSubmit = e => {
        e.preventDefault()
        submitHandler(formData)
    }


        return ( 
            <>
                <Grid textAlign="center" style={{ height: `100vh` }} verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column style={{maxWidth: 600}}>

                                    <img src={createAccount} alt="createAccount" style={{ height: '60%', width: '60%' }}/>

                            <Form size='large' style={{maxWidth: 600}} onSubmit={handleSubmit}>
                                <Segment stacked>
                                    <h5>First Name</h5>
                                    <input type="text" name="first_name" placeholder="First Name" value={formData.user.first_name} onChange={changeHandler} />
                                    <h5>Last Name</h5>
                                    <input type="text" name="last_name" placeholder="Last Name" value={formData.user.last_name} onChange={changeHandler} />
                                    <h5>Email Address</h5>
                                    <input type="email" name="email" placeholder="Enter email" value={formData.user.email} onChange={changeHandler} />
                                    <h5>Username</h5>
                                    <input type="text" name="username" placeholder="Enter a username" value={formData.user.username} onChange={changeHandler} />
                                    <h5>Password</h5>
                                    <input type="password" name="password" placeholder="Password" value={formData.user.password} onChange={changeHandler} />
                                    <h5>Profile Image (URL)</h5>
                                    <input type="url" name="avatar" placeholder="Profile Picture(URL)" value={formData.user.avatar} onChange={changeHandler} />
                                    <Button size="large" type="submit" value="submit">Submit</Button>
                                </Segment>
                            </Form>

                            <Message>
                                Returning User? <a href='#' onClick={handleClick}> Log In</a>
                            </Message>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        )
    }