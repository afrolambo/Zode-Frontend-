import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import UserProfile from './UserProfile'

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
        return (
            <> 
                {this.props.user? 
                <>
                    <h1> Welcome to Zode</h1>
                    <p>A place where people can come to meet new people and form lifelong connections</p>
                </>
                :
                <>
                    {this.state.newUser ? 
                    <>
                        <h1> Welcome to Zode </h1>
                        <Signup submitHandler={this.props.signupHandler} />
                        <button onClick={this.handleClick}>Returning User?</button>

                    </>
                    :
                    <>
                        <h1> Welcome to Zode </h1>
                        <Login submitHandler={this.props.loginHandler} />
                        <button onClick={this.handleClick}>New User?</button>
                    </>
                    } 
                </>
                }

                
            </>
        )
    }
}

export default Welcome