import React from 'react'

class Step1 extends React.Component {
    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
        return (
            <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input 
                className="form-control"
                id="first_name"
                name="first_name"
                type="text"
                placeholder="Enter first name"
                value={this.props.first_name}
                onChange={this.props.handleChange}
                />
                <label htmlFor="last_name">Last Name</label>
                <input 
                className="form-control"
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Enter last name"
                value={this.props.last_name}
                onChange={this.props.handleChange}
                />
                <label htmlFor="email">Email</label>
                <input 
                className="form-control"
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                value={this.props.email}
                onChange={this.props.handleChange}
                />
            </div>
        )
    }
}

export default Step1