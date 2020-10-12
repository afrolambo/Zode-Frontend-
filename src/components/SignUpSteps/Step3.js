import React from 'react'

class Step3 extends React.Component {
    render() {
        if (this.props.currentStep !== 3) {
            return null
        }
        return (
            <div className="form-group">
                <label htmlFor="birthdate">Date of Birth</label>
                <input 
                className="form-control"
                id="birthdate"
                name="birthdate"
                type="date"
                value={this.props.birthdate}
                onChange={this.props.handleChange}
                />
                <label htmlFor="birth_time">Time of Birth</label>
                <input 
                className="form-control"
                id="birth_time"
                name="birth_time"
                type="time"
                value={this.props.birth_time}
                onChange={this.props.handleChange}
                />
                <label htmlFor="birth_location">Location of Birth</label>
                <input 
                className="form-control"
                id="birth_location"
                name="birth_location"
                type="text"
                placeholder="Enter city"
                value={this.props.birth_location}
                onChange={this.props.handleChange}
                />
            </div>
        )
    }
}

export default Step3