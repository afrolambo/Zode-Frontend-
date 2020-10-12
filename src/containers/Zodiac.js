import React, {Component} from 'react';
import SignCard from '../components/SignCard'
import ZodiacList from '../components/ZodiacList'



class Zodiac extends Component {   
  
    componentDidMount(){
        console.log(this.props)
        } 
  
    render() {

      return (
        <div>
          <h1>Signs</h1>
        </div>
      );
    }
}
  

  export default Zodiac