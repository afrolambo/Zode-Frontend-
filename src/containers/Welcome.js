import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'


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
                <div>
                    <h1> Welcome to Zode</h1>
                    
                </div>
                {this.props.user ? 
                <>
                    
                    
                    <p>A place where people can come to meet new people and form lifelong connections</p>
                </>
                :
                <>
                    {this.state.newUser ? 
                    <>

                        <Signup submitHandler={this.props.signupHandler} />
                        <button onClick={this.handleClick}>Returning User?</button>

                    </>
                    :
                    <>

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