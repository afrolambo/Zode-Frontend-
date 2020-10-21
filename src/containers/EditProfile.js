import React from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import EditForm from '../components/EditForm'
import {HOST} from '../constants'
import { Button, Form, Grid, Header, Image, Message, Segment, Row} from 'semantic-ui-react'


class EditProfile extends React.Component{
// constructor(props){
//     super(props)
//     this.goBack = this.goBack.bind(this)
// }
    state = {
        bio: ""
    }

    // goBack(){
    //     this.props.history.goBack()
    // }

    changeHandler = (e) => {
        const {name, value} = e.target 
        this.setState({ [name]: value })
    }

    handleClick = (e) => {
        let id = this.props.location.state.userId
        this.props.history.push(`/users/${id}`)
    }

    submitHandler = (e) => {
        e.preventDefault()
        let id = this.props.location.state.userId
        let newBio = this.state.bio
        fetch(`${HOST}/bio`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json', 
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }, 
            body: JSON.stringify(this.state)
        })
        .then(r => r.json())
        .then(this.props.history.push(`/users/${id}`))

    }

    render() {
        console.log(this.props.location.state)
        return (
            <Grid textAlign='top-center' style={{ height: `100vh` }} verticalAlign="middle">
             <Grid.Row>
                    <Grid.Column style={{maxWidth: 600}}  >
            <div>
                <h1>Edit Bio</h1>
                <Form size='large' style={{maxWidth: 600}} onSubmit={this.submitHandler}>
                    <Segment>
                       <br/>
                        <textarea name="bio" value={this.state.bio} onChange={this.changeHandler} type="textBox" placeholder="tell us about yourself"/>

                    <Button type="submit" value="submit">Submit</Button>
                    <Button onClick={this.handleClick}>Go Back</Button>
                    </Segment>
                </Form>
                {/* <EditForm submitHandler={this.submitHandler} bio={this.state.bio} changeHandler={this.changeHandler} /> */}
            </div>
            </Grid.Column>
            </Grid.Row>
            </Grid>
        )
    }

}

export default withRouter(EditProfile)