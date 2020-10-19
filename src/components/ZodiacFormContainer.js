import React from 'react'
import ZodiacForm from './ZodiacForm'
import {API_ROOT} from '../constants'
import {withRouter} from 'react-router-dom'


class ZodiacFormContainer extends React.Component {

    state = {
        currentUser: null
    }

    async componentDidMount(){
            const token = localStorage.getItem("token")
        if (token){
            fetch("http://localhost:3000/api/v1/profile", {
            method: "GET", 
            headers: { Authorization: `Bearer ${token}` }, 
          })
          .then(resp => resp.json())
          .then(data => this.setState({currentUser: data.user}))
          }else {
            this.props.history.push("/")
          } 
    }

    submitHandler= (userObj) => {
        console.log(userObj)
        fetch(`${API_ROOT}/users/${this.state.currentUser.id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json', 
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }, 
            body: JSON.stringify(userObj)
        }).then(this.props.history.push('/'))
    }

    render() {
        console.log(this.state.currentUser)
        return(
            <div>
                <ZodiacForm submitHandler={this.submitHandler} />
            </div>
        )
    }
}

export default withRouter(ZodiacFormContainer)