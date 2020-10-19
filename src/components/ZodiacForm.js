import React from 'react'
import {withRouter} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

class ZodiacForm extends React.Component {
  state = {
    birthdate: "", 
    birth_time: "", 
    birth_location: "", 
    sign: "",
}

setAndChange = (e) => {
    this.changeHandler(e)
    this.setSign(e)
}

setSign = (e) => {
    let birthday = e.target.value.split(/\s*\-\s*/g)
    let month = birthday[1]
    let day = birthday[2]
    let sign
    console.log(month)

        if((month == 1 && day < 20) || (month == 12 && day > 21)) {
            sign = "Capricorn";
            // return sign
          } else if ((month == 1 && day > 19) || (month == 2 && day < 19)) {
            sign = "Aquarius";
            // return sign
          } else if((month == 2 && day > 18) || (month == 3 && day < 21)) {
            sign = "Pisces";
            // return sign
          } else if((month == 3 && day > 20) || (month == 4 && day < 20)) {
            sign = "Aries";
            // return sign
          } else if((month == 4 && day > 19) || (month == 5 && day < 21)) {
            sign = "Taurus";
            // return sign
          } else if((month == 5 && day > 20) || (month == 6 && day < 21)) {
            sign = "Gemini";
            // return sign
          } else if((month == 6 && day > 20) || (month == 7 && day < 23)) {
            sign = "Cancer";
            // return sign
          } else if((month == 7 && day > 22) || (month == 8 && day < 23)) {
            sign = "Leo";
            // return sign
          } else if((month == 8 && day > 22) || (month == 9 && day < 23)) {
            sign = "Virgo";
            // return sign
          } else if((month == 9 && day > 22) || (month == 10 && day < 23)) {
            sign = "Libra";
            // return sign
          } else if((month == 10 && day > 22) || (month == 11 && day < 22)) {
            sign = "Scorpio";
            // return sign
          } else if((month == 11 && day > 21) || (month == 12 && day < 22)) {
            sign = "Sagittarius";
            // return sign
          } 

    this.setState({sign: sign})
}

changeHandler = (e) => {
  let today = new Date() 
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    this.setState({ 
      [e.target.name]: e.target.value,
      birth_time: time 
    })

    let birthday = e.target.value.split(/\s*\-\s*/g)
    console.log(birthday)
}

submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
}



render() {
    console.log(this.state)
    
    return ( 
            <>
                <h1>Let Us Find Your Sign</h1>
                <form onSubmit={this.submitHandler} className="ui form">
                    <label>Month/Day/Year</label>
                    <input type="date" name="birthdate" placeholder="mm/dd/yyyy" value={this.state.birthdate} onChange={this.setAndChange} />
                    <input type="text" name="birth_location" placeholder="Enter City" value={this.state.birth_location} onChange={this.changeHandler} />
                    <input type="submit" value="Find Sign" />
                </form>
            </>
    )
}
  }
   
  export default withRouter(ZodiacForm);