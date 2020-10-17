import React from 'react'
// import Step1 from './SignUpSteps/Step1'
// import Step2 from './SignUpSteps/Step2'
// import Step3 from './SignUpSteps/Step3'


class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // currentStep: 1,
            username: "", 
            password: "", 
            email:"", 
            first_name: "", 
            last_name: "", 
            birthdate: "", 
            birth_time: "", 
            birth_location: "", 
            avatar: "https://norrismgmt.com/wp-content/uploads/2020/05/24-248253_user-profile-default-image-png-clipart-png-download.png", 
            bio: "Tell us about yourself", 
            sign: '', 
        }
    }

    changeHandler = e => {
        const {name, value} = e.target 
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }


    render() {
        return ( 
                <>
                    <h1>Create Account</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.changeHandler} />
                        <input type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.changeHandler} />
                        <input type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.changeHandler} />
                        <input type="text" name="username" placeholder="Enter a username" value={this.state.username} onChange={this.changeHandler} />
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                        <input type="url" name="avatar" placeholder="Profile Picture(URL)" value={this.state.avatar} onChange={this.changeHandler} />
                        {/* <input type="date" name="birthdate" value={this.state.birthdate} onChange={this.changeHandler} />
                        <input type="time" name="birth_time" value={this.state.birth_time} onChange={this.changeHandler} />
                        <input type="text" name="birth_location" placeholder="Enter City" value={this.state.birth_location} onChange={this.changeHandler} /> */}
                        <input type="submit" />
                    </form>
                </>
        )
    }
  }

  
   
  export default Signup;