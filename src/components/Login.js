import React from 'react';

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
        <form onSubmit={this.submitHandler} className="App">
            <h1>Login</h1>
            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
            <input type="submit" value="Login" />
      </form>
        )
    }
}

export default Login;