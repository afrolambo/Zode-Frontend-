import React from 'react'

class Step2 extends React.Component {
    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        return (
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                className="form-control"
                id="username"
                name="username"
                type="text"
                placeholder="Enter desired username"
                value={this.props.username}
                onChange={this.props.handleChange}
                />
                <label htmlFor="password">Password</label>
                <input 
                className="form-control"
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                value={this.props.password}
                onChange={this.props.handleChange}
                />
                <label htmlFor="avatar">Profile Image "(URL)"</label>
                <input 
                className="form-control"
                id="avatar"
                name="avatar"
                type="url"
                placeholder="img url"
                value={this.props.avatar}
                onChange={this.props.handleChange}
                />
            </div>
        )
    }
}

export default Step2