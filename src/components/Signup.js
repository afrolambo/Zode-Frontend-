import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Row} from 'semantic-ui-react'
import createAccount from '../PNG/createAccount.png'





class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // currentStep: 1,
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
    }

    changeHandler = e => {
        const {name, value} = e.target 
        this.setState({ [name]: value })
    } 

    handleSubmit = e => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    clickHandler = () => {

    }


    render() {
        return ( 
                <>
                <Grid textAlign="center" style={{ height: `100vh` }} verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column style={{maxWidth: 600}}  >
                                    <img src={createAccount} alt="createAccount" style={{ height: '60%', width: '60%' }}/>

                            <Form size='large' style={{maxWidth: 600}} onSubmit={this.handleSubmit}>
                                <Segment stacked>
                                    <h5>First Name</h5>
                                    <input type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.changeHandler} />
                                    <h5>Last Name</h5>
                                    <input type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.changeHandler} />
                                    <h5>Email Address</h5>
                                    <input type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.changeHandler} />
                                    <h5>Username</h5>
                                    <input type="text" name="username" placeholder="Enter a username" value={this.state.username} onChange={this.changeHandler} />
                                    <h5>Password</h5>
                                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                                    <h5>Profile Image (URL)</h5>
                                    <input type="url" name="avatar" placeholder="Profile Picture(URL)" value={this.state.avatar} onChange={this.changeHandler} />
                                    <Button size="large" type="submit" value="submit">Submit</Button>
                                </Segment>
                            </Form>
                            <Message>
                                Returning User? <a href='#' onClick={this.props.handleClick}> Log In</a>
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </>
        )
    }
  }

  
   
  export default Signup;