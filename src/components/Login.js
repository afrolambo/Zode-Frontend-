import React from 'react';
import 'semantic-ui-css/semantic.min.css'

class Login extends React.Component {
    state = {
        username: "", 
        password: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render() {
        return (
            <div className="ui centered grid container" className="ui fluid card">

                <form onSubmit={this.submitHandler} className="App">
                    <h1>Login</h1>
                    <div>
                        <label>User</label>
                        <input className="field" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input className="field" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                    </div>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default Login;