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
        }
        // this.changeHandler = this.changeHandler.bind(this)
        // this._next = this._next.bind(this)
        // this._prev = this._prev.bind(this)
    }

    changeHandler = e => {
        const {name, value} = e.target 
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    // _next = () => {
    //     console.log(this.state)
    //     let currentStep = this.state.currentStep
    //     currentStep = currentStep >= 2? 3: currentStep + 1
    //     this.setState({
    //         currentStep: currentStep
    //     })
    // }

    // _prev = () => {
    //     let currentStep = this.state.currentStep
    //     currentStep = currentStep <= 1? 1: currentStep - 1
    //     this.setState({
    //         currentStep: currentStep
    //     })
    // }

    // previousButton() {
    //     let currentStep = this.state.currentStep;
    //     if(currentStep !==1){
    //         return (
    //             <button 
    //             className="btn btn-secondary"
    //             type="button" onClick={this._prev}>
    //                 Previous
    //             </button>
    //         )
    //     }
    //     return null;
    // }

    // nextButton() {
    //     let currentStep = this.state.currentStep;
    //     if(currentStep <3) {
    //         return (
    //             <button 
    //             className="btn btn-primary float-right"
    //             type="button" onClick={this._next} >
    //                 Next
    //             </button>
    //         )
    //     }
    //     return null;
    // }

    render() {
        return ( 
                <>
                    <h1>Create Account</h1>
                    {/* <p> Step {this.state.currentStep} </p> */}
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.changeHandler} />
                        <input type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.changeHandler} />
                        <input type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.changeHandler} />
                        <input type="text" name="username" placeholder="Enter a username" value={this.state.username} onChange={this.changeHandler} />
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                        <input type="url" name="avatar" placeholder="Profile Picture(URL)" value={this.state.avatar} onChange={this.changeHandler} />
                        <input type="date" name="birthdate" value={this.state.birthdate} onChange={this.changeHandler} />
                        <input type="time" name="birth_time" value={this.state.birth_time} onChange={this.changeHandler} />
                        <input type="text" name="birth_location" placeholder="Enter City" value={this.state.birth_location} onChange={this.changeHandler} />



                        {/* <Step1 
                        currentStep={this.state.currentStep}
                        handleChange={this.changeHandler}
                        first_name={this.state.first_name}
                        last_name={this.state.last_name} 
                        email={this.state.email} 
                        />
                        <Step2 
                        currentStep={this.state.currentStep}
                        handleChange={this.changeHandler}
                        username={this.state.username}
                        password={this.state.password}
                        avatar={this.state.avatar} 
                        />
                        <Step3 
                        currentStep={this.state.currentStep}
                        handleChange={this.changeHandler}
                        birthdate={this.state.birthdate}
                        birth_time={this.state.birth_time}
                        birth_location={this.state.birth_location}
                        />
                        {this.previousButton()}
                        {this.nextButton()} */}
                        <input type="submit" />
                    </form>
                </>
        )
    }
  }

  
   
  export default Signup;