import React, {Component} from 'react';
import ZodiacList from '../components/ZodiacList'



class Zodiac extends Component {    
  
    render() {

      return (
        <div>
          <ZodiacList signs={this.props.zodiac} img={this.props.img} />
        </div>
      );
    }
}
  

  export default Zodiac