import React from 'react'

class ZodiacForm extends React.Component {
  state = {
    birthDate: "", 
    birthTime: "", 
    birthLocation: "", 
}

changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
}

submitHandler= (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
}

render() {

    return ( 
            <>
                <h1>Let Us Find Your Sign</h1>
                <form onSubmit={this.submitHandler}>
                    <input type="firstName" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.changeHandler} />
                    <input type="lastName" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.changeHandler} />
                    <input type="birthDate" name="birthDate" placeholder="Birthday" value={this.state.birthDate} onChange={this.changeHandler} />
                    <input type="birthTime" name="birthTime" placeholder="Time of Birth" value={this.state.birthTime} onChange={this.changeHandler} />
                    <input type="birthLocation" name="birthLocation" placeholder="Location of Birth" value={this.state.birthLocation} onChange={this.changeHandler} />
                    <input type="submit" value="Find Sign" />
                </form>
            </>
    )
}
  }
   
  export default ZodiacForm;